import React from 'react'

function DeleteButton(props) {
    return (
        <div className="fa fa-trash-o fa-2x" style={{cursor: "pointer"}}onClick={() => props.delete(props.id)}></div>
    )
}

export default DeleteButton