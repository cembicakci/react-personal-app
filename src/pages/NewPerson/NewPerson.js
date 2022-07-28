import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewPersonForm from '../../components/Names/NewPersonForm'
import styles from './NewPerson.module.css'

function NewPerson() {

  const navigate = useNavigate();

  function addPerson(person) {
    fetch(
      'https://personel-app-c7f69-default-rtdb.firebaseio.com/person.json',
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate("/", { replace: true });
    })
  }

  return (
    <main className={styles.newPerson}>
      <h2>Add New Person</h2>

      <NewPersonForm onAddPerson={addPerson} />
    </main>
  )
}

export default NewPerson
