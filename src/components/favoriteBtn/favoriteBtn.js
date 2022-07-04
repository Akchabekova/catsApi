import React from 'react';

const FavoriteBtn = ({onClick}) => {
    return (
        <div>
            <svg onClick={onClick} className="favorite" width="40" height="37" viewBox="0 0 40 37" fill = "none" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
    );
};

export default FavoriteBtn;