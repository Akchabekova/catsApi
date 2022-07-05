import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header";
import FavoriteBtn from "../../components/favoriteBtn";
import {useDispatch} from "react-redux";
import CatCard from "../../components/catCard";
import Pagination from "../../components/pagination";


const Homepage = () => {
const dispatch = useDispatch()
const [ cats, setCats ] = useState([])
const [ isLoading, setIsLoading ] = useState(true)
const [ page, setPage ] = useState(0)



useEffect( () => {
  axios(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page +1}`)
      .then(({data}) =>{
          setCats((data))
          setIsLoading(false)
      })
},[page] )

    const addToFavorites =  (cat) => {
    dispatch({type: "ADD_TO_FAVORITES", payload: cat})
  }
    if(isLoading){
        return "Loading ..."
    }

  return (
        <>
            <Pagination page={page} setPage={setPage}/>
            <div className=" container mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {
                    cats.map(cat => (
                     <CatCard cat={cat} action = {addToFavorites} />
                    ))
                }

            </div>

        </>
    );
};

export default Homepage;
