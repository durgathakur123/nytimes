import React from "react";

function NavBar(props) {
    const handleCategoryClick =(e) => {
        const currCategory = e.target.value;
        props.dataCategory(currCategory)
    }
    return(
        <>
            <div className="navBar">
                <ul className={'menu categoryBtn'}>
                    <li>Categories: </li>   
                    <li><button className={'active'} onClick={handleCategoryClick} value={'science'}>Science</button></li>
                    <li><button onClick={handleCategoryClick} value={'world'}>World</button></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;