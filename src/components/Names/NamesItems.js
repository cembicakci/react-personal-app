import React, { useContext } from 'react'
import PersonContext from '../../context/FavoritesContext'
import styles from './NamesItems.module.css'

function NamesItems(props) {

  const personCtx = useContext(PersonContext);

  const itemIsFavorite = personCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      personCtx.removeFavorite(props.id)
    } else {
      personCtx.addFavorite({
        id: props.id,
        name: props.name,
        country: props.country,
        email: props.email,
        image: props.image
      })
    }
  }


  return (
    <div className={styles.card}>
      <img src={props.image} className={styles.img}></img>

      <div className={styles.main}>
        <h3>{props.name}</h3>

        <p>{props.country}</p>
        <p>{props.email}</p>
      </div>

      <button className={styles.btn} style={{backgroundColor: itemIsFavorite ? "#DF7861" : "#ffb7a7"}} onClick={toggleFavoriteStatusHandler}>
        {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  )
}

export default NamesItems