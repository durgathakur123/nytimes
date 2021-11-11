import React from "react";
import { Router } from "react-router";
import NavBar from "./Navbar";
import {Link} from 'react-router-dom';

function Header() {
    return(
        <>
        <header className={'headerWrapper'}>
            <div className={'container'}>
                <div className="toggleMenu">
                    <img src={'menu.png'} />
                </div>
                <div className={'logo'}>
                    <img src={'logo.PNG'} alt="logo" />
                </div>
                <div className={'text-black'}>
                <Link to='/Login'>Login</Link>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;