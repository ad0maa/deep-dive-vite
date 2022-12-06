import React from 'react'

function createLi(items) {
    return items.map((item, index) => (
        <li key = {index}>{item}</li>
    ))
}

const ListItems = ({items}) => {
    return (
        <>
            {createLi(items)}
        </>
    )
}

export default ListItems