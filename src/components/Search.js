import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [state, setstate] = useState()

    function handleSearch(e) {
        setstate(e.target.value)
        if(e.charCode = 13) {
            return <Link to={`/searchdetail/?search=${state}`} ></Link>
        }
    }

    return (
    <div>
        <form className={'searchWrap'}>
            <div className="form-group search d-flex">
                <input type="text" className={ 'form-control searchField' } value={state} 
                placeholder={'Search'} onChange={handleSearch} />
                <img src={'search.png'}/>
            </div>
        </form>
    </div>
    )
}

export default Search
