import React from 'react';

const DeleteFavBtn = ({onClick}) => {
    return (
        <div onClick={onClick} className="delete-btn">
            <i className='bx bx-x' />
        </div>
    );
};

export default DeleteFavBtn;