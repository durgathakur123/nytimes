import React from "react";
import NavBar from "./Navbar";

function Header() {
    return(
        <>
        <header className={'headerWrapper'}>
            <div className={'container'}>
                <img src={'PetFinerLogo.PNG'} alt="logo" />
                <div>
                    <h1 className={'mainHeading'}>Welcome to Our World!</h1>
                    <div className={'subHeading'}>Finding Your New Best Friend? 
                    Get Personalized pet Matches Here...</div>
                </div>
                <div className={"headGifWrapper"}>
                    <img src={'pup3.GIF'} alt="PetHere" />
                </div>
            </div>

             {/*  ------NavBar Component ---  */}
            <NavBar />  

        </header>
        </>
    )
}

export default Header;