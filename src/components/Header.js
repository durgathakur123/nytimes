import React from "react";
import NavBar from "./Navbar";

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
                <a className="link">Login</a>
            </div>
        </header>
        </>
    )
}

export default Header;