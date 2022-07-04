import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import favoriteCats from "../pages/favoriteCats";

const initialState = {
    favorites: [],
    count: 0

}
const storeReducer = ( state = initialState , action ) => {
    switch (action.type){
        case "ADD_TO_FAVORITES" :
           return {...state, favorites: [...state.favorites, action.payload]}
        case "REMOVE_FROM_FAVORITES":
            return {...state, favorites: [...state.favorites.filter(favoriteCats => favoriteCats.id !== action.payload.id)]}
         default:
            return state

    }
}
 export const store = createStore(storeReducer, composeWithDevTools(
     applyMiddleware()
 ))


// {type: "ADD_TO_FAVORITES" , payload: {}}