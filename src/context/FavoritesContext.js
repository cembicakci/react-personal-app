import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritePersons) => {},
    removeFavorite: (personId) => {},
    itemIsFavorite: (personId) => {}
});

export const FavoritesContextProvider = (props) => {

    const [personFavorites, setPersonFavorites] = useState([]);

    function addFavoriteHandler(favoritePersons){
        setPersonFavorites((prevFav) => {
            return prevFav.concat(favoritePersons)
        })
    }

    function removeFavoriteHandler(personId){
        setPersonFavorites((prevFav) => {
            return prevFav.filter(person => person.id !== personId)
        })
        
    }

    function itemIsFavoriteHandler(personId){
        return personFavorites.some(person => person.id === personId)
    }

    const context = {
        favorites: personFavorites,
        totalFavorites: personFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext







