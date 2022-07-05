import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import Header from "../../components/header";
import DeleteFavBtn from "../../components/deleteFavBtn";
import CatCard from "../../components/catCard";



const FavoriteCats = () => {
const dispatch = useDispatch()
const { favorites } = useSelector(( store ) => store)
 const removeFromFavorites =  (cat) => {
     dispatch({type: "REMOVE_FROM_FAVORITES", payload: cat})
 }

    return (
        <>
            {
                <div className=" container mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                    {
                       favorites.length ? favorites.map(cat => (
                         <CatCard cat={cat} action = {removeFromFavorites} isFavorite />
                        )) :
                           <p className="text-pink-600 text-lg">Вы не выбрали любимых котиков</p>
                    }
                </div>
            }
       </>



    );
};

export default FavoriteCats;