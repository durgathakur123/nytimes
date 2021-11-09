import React from "react";

function NavBar() {
    return(
        <>
            <div className="navBar">
                <div className="container">
                    <div className="quickConnect">Quick Connect Here: 
                    <img src={'whatsapp.png'} alt={'Quick Connect'}/>
                    </div>
                    <div className="toggleMenu">
                        <img className={'w-25'} src={'like.png'} alt="favrorite" />
                        <img src={'menu.png'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;