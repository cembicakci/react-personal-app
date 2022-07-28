import React, { useContext } from 'react'
import { useRef } from 'react';
import PersonContext from '../../context/FavoritesContext';
import styles from './NewPersonForm.module.css'

function NewPersonForm(props) {

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const coutryInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredCoutry = coutryInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const personData = {
            name: enteredName,
            email: enteredEmail,
            country: enteredCoutry,
            image: enteredImage
        }

        props.onAddPerson(personData);

    }


  

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.control}>
                <label id='name'>Name Surname</label>
                <input type='text' id='name' ref={nameInputRef} required/>
            </div>

            <div className={styles.control}>
                <label id='email'>Email</label>
                <input type='email' id='email' ref={emailInputRef} required/>
            </div>

            <div className={styles.control}>
                <label id='country'>Country</label>
                <input type='text' id='country' ref={coutryInputRef} required/>
            </div >

            <div className={styles.control}>
                <label id='image'>Image</label>
                <input type='text' id='image' ref={imageInputRef} required/>
            </div>

            <button className={styles.btn}>Add Person</button>
        </form>
    )
}

export default NewPersonForm