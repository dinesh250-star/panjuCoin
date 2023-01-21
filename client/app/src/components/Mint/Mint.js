import React from 'react'
import Navbar from '../Navbar/Navbar'
import Eth from '../../assets/Eth.png'
import Logo from '../../assets/square logo-modified.png'
import { Link } from "react-router-dom";
import MintStyles from './Mint.module.css';
const Mint = () => {
  return (
    <div className={MintStyles.Wrapper}>

      <div className={MintStyles.Container}>
        <div></div>
        <div className={MintStyles.mintbox}>
          <div className={MintStyles.subbox}>
           <h1>Mint</h1> </div>

           <div id={MintStyles.form}>
                  <div className={MintStyles.swapbox1}>
                      <div>
                          <img src={Eth} id="from_token" className={MintStyles.coinimg}/>
                          <span id="from_token_text"></span>
                      </div>

                      <div className={MintStyles.dollar}><div>$</div></div>

                      <button id={MintStyles.max}>MAX</button>


                      <div >
                          <input className={MintStyles.input} placeholder="amount" id="from_amount"/>
                      </div>
                  </div>
                  <div className={MintStyles.swapbox2}>
                      <div className="swapbox_select token_select"  id="to_token_select">
                          <img src={Logo} id="to_token" className={MintStyles.coinimg}/>
                          <span id="to_token_text"></span>
                      </div>

                      <div className={MintStyles.dollar2}><div>$</div></div>


                      <div></div>
                      <div className={MintStyles.swapbox_select}>
                          <input className={MintStyles.input} placeholder="amount" id="to_amount"/>
                      </div>
                  </div>
                  <div className={MintStyles.gas_estimate}>Estimated Gas: <span id={MintStyles.gas_estimate}></span></div>

                  <div className={MintStyles.Btn}>
                  

                  <button disabled id={MintStyles.MintBtn} className={MintStyles.allBtn} >
                      Mint
                  </button>
                  </div>
              </div>

        </div>

        <div></div>

      </div>


    </div>
  )
}

export default Mint

