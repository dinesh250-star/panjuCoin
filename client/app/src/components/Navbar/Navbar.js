import React from 'react'
import styled from 'styled-components'
import Mint from '../Mint/Mint'
import Redeem from '../Reedem/Reedem'
import logo from '../../assets/logo-no-background.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
        <Box>
            <Link to ="/">
               <img src={logo}  />
            </Link>
        </Box>
        
        <Menu>

            <div className='mint'>
                <Link to ="/mint"><h4 className='navtext'>Mint</h4></Link>
            
            </div>
            <div className='redeem'>
            <Link to ="/redeem"><h4 className='navtext'>Redeem</h4></Link>

            </div>
            
        </Menu>
        <Rightmenu >
            <a href="">Connect Wallet</a>
        </Rightmenu>

        

    </Wrapper>

  )
}

export default Navbar




const Wrapper = styled.div `
position: fixed;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
display: grid;
grid-template-columns: 2fr 4fr 2fr;
margin: 10px 2px;
padding: 5px 0px;
`
const Box = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
    img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
}
`

const Menu = styled.div`
/* width: 100%; */
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin-left: 300px;
margin-right: 300px; 
border-style: solid;
background-color: white;
border-radius:5px;
font-weight: 500;
/* margin : 7px 0px 7px 0px; */
font-size: 14px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
border-style: none;
justify-content: center;
align-items: center;
letter-spacing: 0.5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
background: linear-gradient(-45deg, #ffffff, rgb(255, 255, 255), rgba(255, 255, 255, 0.71), #fcf7ff);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style:none;
    cursor: pointer;
    height: 35px;
    color:#000000ae;
    
}
a{
    text-decoration: none;
    color: #383838d3;
    
}
.mint:hover{
    background-color: #cebbe79a;
    transition: 20ms ease-in-out;
}
.redeem:hover{
    background-color: #e7c2bb9a;
    transition: 20ms ease-in-out;
}
`
const Rightmenu = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
a{
    
list-style-type: none;
text-decoration: none;
color: #549f35;
font-weight:600;
align-items: center;
justify-content: center;
border-style: hidden;
border-color: white;
background-color: white;
padding: 5px;
padding-left: 10px;
padding-right: 10px;
border-radius:8px;
background-color: #549f35;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
color: white;
letter-spacing: 0.5px;
}
`