import React from 'react'
import Mint from '../Mint/Mint'
import Redeem from '../Redeem/Redeem'
import logo from '../../assets/logo-no-background.png'
import { Link } from "react-router-dom";
import NavbarStyles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={NavbarStyles.Wrapper}>
    <div className={NavbarStyles.Box}>
            <Link to ="/">
               <img src={logo}  />
            </Link>
        </div>
        
        <div className={NavbarStyles.Menu}>

            <div className={NavbarStyles.mint}>
                <Link to ="/mint"><h4 className={NavbarStyles.navtext}>Mint</h4></Link>
            
            </div>
            <div className={NavbarStyles.redeem}>
            <Link to ="/redeem"><h4 className={NavbarStyles.navtext}>Redeem</h4></Link>

            </div>
            
        </div>
        <div className={NavbarStyles.Rightmenu} >
            <a href="">Connect Wallet</a>
        </div>

        

    </div>

  )
}

export default Navbar
