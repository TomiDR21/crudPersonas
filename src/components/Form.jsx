import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

const Form = ({ onAdd, showAddOnForm, showEditOnForm, onCancel, showCancel, persona, boton, boton2, namePlaceholder, lastNamePlaceholder, emailPlaceholder, countryPlaceholder }) => {
    console.log({ persona })
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();

    const editForm = (persona) => {

        setName(persona.name)
        setLastName(persona.lastName)
        setEmail(persona.email)
        setCountry(persona.country)

    }

    const handleAdd = (e) => {
        e.preventDefault()
        const persona = {

            name: name,
            lastName: lastName,
            email: email,
            country: country
        }
        onAdd(persona)

    }

    const cancelEdit = (e) => {
        e.preventDefault()
        onCancel()
    }

    return (
        <form className={styles.formDeForm}>
            <label className={styles.formFormLabel}><h3>Name</h3></label>
            <input className={styles.inputFormDeForm}
                autoComplete="off"
                placeholder={namePlaceholder}
                type="text"
                name='nombre'
                value={name}
                onChange={e => setName(e.target.value)}
            >
            </input>
            <label className={styles.formFormLabel}><h3>Last name</h3></label>
            <input className={styles.inputFormDeForm}
                placeholder={lastNamePlaceholder}
                type="text"
                name="apellido"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            >
            </input>
            <label className={styles.formFormLabel}><h3>E-Mail</h3></label>
            <input className={styles.inputFormDeForm}
                type="text"
                name="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
            >
            </input>
            <label className={styles.formFormLabel}><h3>Country</h3></label>
            <input className={styles.inputFormDeForm}
                type="text"
                name="country"
                placeholder={countryPlaceholder}
                value={country}
                onChange={e => setCountry(e.target.value)}
            >
            </input>

            <button hidden={showAddOnForm} onClick={handleAdd} className={styles.botonadd}>Add</button>
            <button hidden={showEditOnForm} className={styles.botonEditOnForm}>Edit</button>
            <button hidden={showCancel} onClick={cancelEdit} className={styles.botoncancel}>Cancel</button>


        </form>

    )
}

export default Form