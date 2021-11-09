import React from 'react';

function List(props){
    return(
        <>
            <div className={'container'}>
                <h3 className="title">Dog Breeds. Hey! Click Here...</h3>
                <div className={'listWrapper'}>
                    { props && props.data && 
                        Object.keys(props.data).map(item=>{
                            return (
                            <React.Fragment> 
                                <div className={'item'} onClick={()=>props.handleClick(item)}>
                                    {item}     
                                </div>
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
