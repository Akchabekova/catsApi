import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import Header from "../../components/header";
import DeleteFavBtn from "../../components/deleteFavBtn";


const FavoriteCats = () => {
const dispatch = useDispatch()
const { favorites } = useSelector(( store ) => store)



 const addFromFavorites =  (id) => {
     dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
 }
    return (
        <>
            <Header />
            {
                <div className=" container mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                    {
                        favorites.map(favorite => (
                            <div key={favorite.id} className=" cat-card relative w-full bg-gray-300 rounded-lg flex flex-col justify-center items-center">
                                <img className="object-center object-cover  h-48 w-full"
                                     src={favorite.url}
                                     alt="photo" />
                                <DeleteFavBtn />
                            </div>
                        ))
                    }
                </div>
            }
       </>



    );
};

export default FavoriteCats;