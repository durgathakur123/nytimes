import React from 'react'

function Search() {
    return (
        <div>
            <form className={'searchWrap'}>
                <div className="form-group search d-flex">
                    <input type="text" className={ 'form-control searchField' } placeholder={'Search'} />
                    <img src={'search.png'}/>
                </div>
            </form>
        </div>
    )
}

export default Search
