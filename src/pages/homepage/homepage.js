import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import FavoriteBtn from "../../components/favoriteBtn";
import {useDispatch} from "react-redux";


const Homepage = () => {
const dispatch = useDispatch()
const [ cats, setCats ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)


useEffect( () => {
  axios("https://api.thecatapi.com/v1/images/search?page=0&limit=20")
      .then(({data}) =>{
          setCats((data))
          setIsLoading(false)
      })
},[] )

    const addToFavorites =  (cat) => {
    dispatch({type: "ADD_TO_FAVORITES", payload: cats})
  }
    if(isLoading){
        return "Loading ..."
    }

  return (
        <>
            <Header />
            <div className=" container mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {
                    cats.map(cat => (
                        <div key={cat.id} className=" cat-card relative w-full bg-gray-300 rounded-lg flex flex-col justify-center items-center">
                       <img className="object-center object-cover  h-48 w-full"
                         src={cat.url}
                         alt="photo" />
                       <FavoriteBtn onClick = { addToFavorites } />
                        </div>
                    ))
                }

            </div>

        </>
    );
};

export default Homepage;
