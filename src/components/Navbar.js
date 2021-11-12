import React, {useState} from "react";

function NavBar(props) {
    const [state, setstate] = useState();
    const handleCategoryClick =(e) => {
        const currCategory = e.target.value;
        setstate(currCategory)
        props.dataCategory(currCategory)
        console.log(currCategory);
    }
    return(
        <>
            <div className="navBar">
                <ul className={'menu categoryBtn'}>
                    <li>Categories: </li>   
                    <li><button onClick={handleCategoryClick} className={(state == 'science'? 'active': null) } value={'science'}>Science</button></li>
                    <li><button onClick={handleCategoryClick} className={(state == 'world'? 'active': null)}value={'world'}>World</button></li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;