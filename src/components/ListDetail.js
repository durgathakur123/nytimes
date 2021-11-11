import React from 'react'

function ListDetail(props) {
    console.log(props.data);
    return (
        <div className={'detailWrapper container'}>
       
            <div className={'my-4 w-75 mx-auto bg-white p-5'}>
                <div className={'content mx-auto'}>
                    <h3 className={'title'}> {props.data.title} </h3>
                    <p className={'font-sm'}>Last Updated: 2021-11-10</p>
                    <p className={'para'}>
                    {props.data.abstract} </p>
                    <img src={'social.PNG'} />
                    <hr />
                    <div className={'imgWrapper mx-auto'}>
                        <img src={props.data.multimedia[0].url} />
                    </div>
                </div>
                <hr/>
                <div className={'commentWrapper'}>
                    <h6 className={'title'}>Comment</h6>
                </div>
            </div>
        </div>
    )
}

export default ListDetail
