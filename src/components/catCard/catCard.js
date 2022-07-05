import React from 'react';
import FavoriteBtn from "../favoriteBtn";

const CatCard = ({cat , action, isFavorite}) => {
    return (
        <div>
            <div key={cat.id} className=" cat-card relative w-full bg-gray-300 rounded-lg flex flex-col justify-center items-center">
                <img className="object-center object-cover  h-48 w-full"
                     src={cat.url}
                     alt="photo" />
                <FavoriteBtn onClick = {() => action(cat)} isFavorite = {isFavorite} />
            </div>
        </div>
    );
};

export default CatCard;