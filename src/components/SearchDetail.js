import React from 'react'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'

function SearchDetail() {
    return (
        <div className={'searchDetail'}>
        <Header />
            <div className={'listWrapper w-75 mx-auto p-5 my-4'}>
            <div className={'col-md-12 mx-auto row'}>
                <Search/>
            <h3 className={'my-3 text-center'}>Search Results</h3>
            </div>
            <div className={'itemWrapper'}>
                <div className={'item row d-flex align-items-center mx-auto'}>
                    <div className={'content col-md-6'}>
                        <h6 className="title">Sign Up for the Science Times Newsletter</h6>
                        <p className={'font-sm'}>Last Updated: 2021-11-10</p>
                        <p className={'para'}>
                            Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos.</p>
                    </div>
                    <div className={'imgWrapper col-md-6'}>  <img src={'article.jpg'} /></div>
                </div>     
                <div className={'item row d-flex align-items-center mx-auto'}>
                    <div className={'content col-md-6'}>
                        <h6 className="title">Sign Up for the Science Times Newsletter</h6>
                        <p className={'font-sm'}>Last Updated:  2021-11-10</p>
                        <p className={'para'}>
                            Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos.</p>
                    </div>
                    <div className={'imgWrapper col-md-6'}>  <img src={'article.jpg'} /></div>
                </div> 
                <div className={'item row d-flex align-items-center mx-auto'}>
                    <div className={'content col-md-6'}>
                        <h6 className="title">Sign Up for the Science Times Newsletter</h6>
                        <p className={'font-sm'}> Last Updated: 2021-11-10</p>
                        <p className={'para'}>
                            Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos.</p>
                    </div>
                    <div className={'imgWrapper col-md-6'}>  <img src={'article.jpg'} /></div>
                    </div>  
                </div> 
                <div className={'text-center mt-4'}> 
                <ul className={'pagination'}>
                    <li>First</li>
                    <li>Prev</li>
                    <li className={'active'}>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>Next</li>
                    <li>Last</li>
                </ul>
            </div>
            </div>
        <Footer />
        </div>
    )
}

export default SearchDetail
