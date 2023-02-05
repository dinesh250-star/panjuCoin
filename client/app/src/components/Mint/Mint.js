import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Eth from "../../assets/Eth.png";
import Logo from "../../assets/square logo-modified.png";
import { Link } from "react-router-dom";
import MintStyles from "./Mint.module.css";
import axios from "axios";
const Mint = () => {
  const [price, setPrice] = useState(0);
  const [eth, setEth] = useState(0);
  const fetchEthPrice = async (e) => {
    setEth(e.target.value);
    axios
      .get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,")
      .then((response) => {
        setPrice(response.data.USD);
        console.log(response.data.USD);
      });
  };
  const finalPrice = eth * price;
  return (
    <div className={MintStyles.Wrapper}>
      <div className={MintStyles.Container}>
        <div></div>

        <div className={MintStyles.mintbox}>
          <div className={MintStyles.subbox}>
            <h1>Mint</h1>{" "}
          </div>
          <form>
            <div id={MintStyles.form}>
              <div className={MintStyles.swapbox1}>
                <div>
                  <img
                    src={Eth}
                    id="from_token"
                    className={MintStyles.coinimg}
                  />
                  <span id="from_token_text"></span>
                </div>

                <div className={MintStyles.dollar}>
                  <div>$</div>
                </div>

                <button id={MintStyles.max}>MAX</button>

                <div>
                  <input
                    className={MintStyles.input}
                    placeholder="amount"
                    type="number"
                    id="from_amount"
                    onChange={fetchEthPrice}
                  />
                </div>
              </div>
              <div className={MintStyles.swapbox2}>
                <div
                  className="swapbox_select token_select"
                  id="to_token_select"
                >
                  <img
                    src={Logo}
                    id="to_token"
                    className={MintStyles.coinimg}
                  />
                  <span id="to_token_text"></span>
                </div>

                <div className={MintStyles.dollar2}>
                  <div>$</div>
                </div>

                <div></div>
                <div className={MintStyles.swapbox_select}>
                  {/* <input
                    className={MintStyles.input}
                    placeholder="amount"
                    disabled
                    id="to_amount"
                    value={{ price } * { eth }}
                  /> */}
                  <h6>{finalPrice}</h6>
                </div>
              </div>

              <div className={MintStyles.gas_estimate}>
                Estimated Gas: <span id={MintStyles.gas_estimate}></span>
              </div>

              <div className={MintStyles.Btn}>
                <button
                  disabled
                  id={MintStyles.MintBtn}
                  className={MintStyles.allBtn}
                >
                  Mint
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

export default Mint;
