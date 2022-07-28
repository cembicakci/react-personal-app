import React, { useContext } from 'react'
import NamesList from '../../components/Names/NamesList';
import FavoritesContext from '../../context/FavoritesContext'

import styles from './FavoritePerson.module.css'

function FavoritePerson() {

  const personCtx = useContext(FavoritesContext);
  let content;

  if (personCtx.totalFavorites === 0) {
    content = <p>You do not have any favorites yet.</p>
  } else {
    content = <NamesList persons={personCtx.favorites} />
  }
  return (
    <section className={styles.favoritePerson}>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritePerson