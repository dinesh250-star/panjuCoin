import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import Eth from '../../assets/Eth.png'
import Logo from '../../assets/square logo-modified.png'
import { Link } from "react-router-dom";

const Mint = () => {
  return (
    <Wrapper>

      <Container>
        <div></div>
        <div className='mintbox'>
          <div className='subbox'>
           <h1>Mint</h1> </div>

           <div id="form">
                  <div className="swapbox1">
                      <div>
                          <img src={Eth} id="from_token" className='coinimg'/>
                          <span id="from_token_text"></span>
                      </div>

                      <div className='dollar'><div>$</div></div>

                      <button id='max'>MAX</button>


                      <div >
                          <input className="input" placeholder="amount" id="from_amount"/>
                      </div>
                  </div>
                  <div className="swapbox2">
                      <div className="swapbox_select token_select"  id="to_token_select">
                          <img src={Logo} id="to_token" className='coinimg'/>
                          <span id="to_token_text"></span>
                      </div>

                      <div className='dollar2'><div>$</div></div>


                      <div></div>
                      <div className="swapbox_select">
                          <input className="input" placeholder="amount" id="to_amount"/>
                      </div>
                  </div>
                  <div className='gas_estimate'>Estimated Gas: <span id="gas_estimate"></span></div>

                  <div className='Btn'>
                  <button disabled id="Approve" className='allBtn'>
                      Approve
                  </button>

                  <button disabled id="MintBtn" className='allBtn' >
                      Mint
                  </button>
                  </div>
              </div>

        </div>

        <div></div>

      </Container>


    </Wrapper>
  )
}

export default Mint

const Wrapper = styled.div`
    color: #2e2e2e;
`
const Container = styled.div`
position: absolute;
justify-content: center;
align-items: center;
width: 100%;
top: 100px; 
display: grid;
grid-template-columns: 2fr 1.5fr 2fr;
.mintbox{
  display: flex ;
  flex-direction: column;
  border-style: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 5px;
  font-size:16px;
  background-color: white;
}
.subbox{
  margin: 0px 10px;
  padding: 0px 10px ;
}
#form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
}
.swapbox1{
  border-style:none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.swapbox2{
  border-style:none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
/* Coin image css */
.coinimg{
  width: 30px;
  height: 30px;
  align-items: center;
  display: flex;
  padding: 5px;
}
#max{
  border-style: none;
  color: grey;
  letter-spacing: 0.36px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.dollar{
  display:flex;
  width: 40%;
}
.dollar2{
  display:flex;
  width: 40%;
  padding-right: 38px;
}
/* input */
.input{
  border-style: none;
  width: 100px;
  margin-right: 10px;
}
.input:focus{
  outline: none;
}
.gas_estimate{
  margin: 0px 20px 10px 20px;
}
/* approve mint btn */
.Btn{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
}
.allBtn{
  border-style: none;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  cursor: pointer;
}
#Approve{
  background-color: rgb(61, 110, 173);
    border-style: none;
    color: rgb(255, 255, 255);
    border-width: 5px;
    width: 180px;
    height: 33px;
    
}
#MintBtn{
  background-color: rgb(154, 99, 184);
    border-style: none;
    color: rgb(255, 255, 255);
    border-width: 5px;
    width: 180px;
    height: 33px;
}
`