import React from 'react'

function ListDetail(props) {
    console.log(props.data);
    return (
        <div>
            List Detail {props.data}
        </div>
    )
}

export default ListDetail
