import React from 'react'
import Comment from './Comment'

function ListDetail(props) {
    console.log(props.data);
    return (
        <div className={'detailWrapper container'}>
            <div className={'my-4 w-75 mx-auto bg-white p-5'}>
                <div className={'content mx-auto'}>
                    <h3 className={'title'}> {props.data.title} </h3>
                    <p className={'font-sm'}>{props.data.last_updated}</p>
                    <p className={'para'}>
                    {props.data.abstract} </p>
                    <img src={'social.PNG'} />
                    <hr />
                    <div className={'imgWrapper mx-auto'}>
                        <img src={props.data.multimedia[0].url} />
                    </div>
                </div>
               <Comment />
            </div>
        </div>
    )
}

export default ListDetail
