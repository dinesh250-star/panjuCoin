import React from "react";
import Mint from "../Mint/Mint";
import Redeem from "../Redeem/Redeem";
import logo from "../../assets/logo-no-background.png";
import { Link } from "react-router-dom";
import NavbarStyles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbActions } from "../../store/dbSlice";
const Navbar = () => {
  const [userAccount, setUserAccount] = useState("");
  const dispatch = useDispatch();
  const logIn = useSelector((state) => state.db.loggedIn);
  const account = useSelector((state) => state.db.userAcc);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  }, []);
  async function requestAccount() {
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setUserAccount(accounts[0]);

        dispatch(dbActions.logIn());
        dispatch(dbActions.userAccount(accounts[0]));
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
    } else {
      console.log("No metamask injected");
    }
  };
  return (
    <div className={NavbarStyles.Wrapper}>
      <div className={NavbarStyles.Box}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>

      <div className={NavbarStyles.Menu}>
        <div className={NavbarStyles.mint}>
          <Link to="/mint">
            <h4 className={NavbarStyles.navtext}>Mint</h4>
          </Link>
        </div>
        <div className={NavbarStyles.redeem}>
          <Link to="/redeem">
            <h4 className={NavbarStyles.navtext}>Redeem</h4>
          </Link>
        </div>
      </div>

      {logIn ? (
        <h6>{account}</h6>
      ) : (
        <div className={NavbarStyles.Rightmenu}>
          <button onClick={connect}>Connect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
