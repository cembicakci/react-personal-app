import React, { useContext } from 'react'
import PersonContext from '../../context/FavoritesContext'
import NamesItems from './NamesItems'
import styles from './NamesList.module.css'

function NamesList(props) {



  return (
    <div className={styles.namesList}>
      {props.persons.map((person) => (
        <NamesItems
          id={person.id}
          image={person.image}
          name={person.name}
          country={person.country}
          email={person.email} />
      ))}
    </div>
  )
}

export default NamesList