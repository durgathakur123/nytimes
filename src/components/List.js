import React from 'react';
import NavBar from './Navbar';
import Search from './Search';

function List(props){
    return(
        <>
            <div className={'container'}>
            <div className={'listTopWrapper w-75 mx-auto'}>
                <h5 className={'storyTitle text-center mt-4'}>Top Stories Highlightes</h5>
                <div className={'d-flex align-items-center justify-content-between '}>
                    <Search />
                    <NavBar dataCategory={props.dataCategory}/> 
                </div>
                </div>
                <div className={'listWrapper w-75 mx-auto'}>
                    { props && props.data && 
                        Object.values(props.data).map(item=>{
                            return (
                            <React.Fragment> 
                                {item.title && 
                                    <div className={'item row d-flex align-items-center mx-auto'} onClick={()=>props.handleClick(item)}>
                                    <div className={'content col-md-6'}>
                                        <h6 className="title">{item.title} </h6>
                                        <p className={'font-sm'}>Last Updated: {item.updated_date}</p>
                                        <p className={'para'}>
                                            {item.abstract}
                                        </p></div>
                                        { item && item.multimedia && item.multimedia[0] &&  item.multimedia[0].url &&
                                            <div className={'imgWrapper col-md-6'}><img src={item.multimedia[0].url} /></div> 
                                        }  
                                    </div>
                                }
                            </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default List;
