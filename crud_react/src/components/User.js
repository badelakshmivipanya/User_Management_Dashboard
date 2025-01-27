import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button className="btn btn-success">edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User
