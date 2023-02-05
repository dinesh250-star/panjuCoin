import React from "react";
import Navbar from "../Navbar/Navbar";
import Eth from "../../assets/Eth.png";
import Logo from "../../assets/square logo-modified.png";
import { Link } from "react-router-dom";
import RedeemStyles from "./Redeem.module.css";

const Redeem = () => {
  return (
    <div className={RedeemStyles.Wrapper}>
      <div className={RedeemStyles.Container}>
        <div></div>
        <div className={RedeemStyles.redeembox}>
          <div className={RedeemStyles.subbox}>
            <h1>Redeem</h1>{" "}
          </div>
          <form>
            <div id={RedeemStyles.form}>
              <div className={RedeemStyles.swapbox1}>
                <div>
                  <img
                    src={Eth}
                    id="from_token"
                    className={RedeemStyles.coinimg}
                  />
                  <span id="from_token_text"></span>
                </div>

                <div className={RedeemStyles.dollar}>
                  <div>$</div>
                </div>

                <button id={RedeemStyles.max}>MAX</button>

                <div>
                  <input
                    className={RedeemStyles.input}
                    placeholder="amount"
                    id="from_amount"
                    type="number"
                  />
                </div>
              </div>
              <div className={RedeemStyles.swapbox2}>
                <div
                  className="swapbox_select token_select"
                  id="to_token_select"
                >
                  <img
                    src={Logo}
                    id="to_token"
                    className={RedeemStyles.coinimg}
                  />
                  <span id="from_token_text"></span>
                  <span id="to_token_text"></span>
                </div>

                <div className={RedeemStyles.dollar2}>
                  <div>$</div>
                </div>

                <div></div>
                <div className={RedeemStyles.swapbox_select}>
                  <input
                    className={RedeemStyles.input}
                    placeholder="amount"
                    id="to_amount"
                    type="number"
                  />
                </div>
              </div>
              <div className={RedeemStyles.gas_estimate}>
                Estimated Gas: <span id={RedeemStyles.gas_estimate}></span>
              </div>

              <div className={RedeemStyles.Btn}>
                <button
                  disabled
                  id={RedeemStyles.redeemBtn}
                  className={RedeemStyles.allBtn}
                >
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Redeem;
