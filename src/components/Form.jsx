import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

const Form = ({ onAdd, persona, boton, boton2, namePlaceholder, lastNamePlaceholder, emailPlaceholder, countryPlaceholder }) => {

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();

    const handleClick = (e) => {
        e.preventDefault()
        const persona = {

            name: name,
            lastName: lastName,
            email: email,
            country: country
        }
        onAdd(persona)

    }

    return (
        <form className={styles.formDeForm}>
            <label className={styles.formFormLabel}><h3>Name</h3></label>
            <input className={styles.inputFormDeForm}
                autoComplete="off"
                placeholder={namePlaceholder}
                required
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

            <button onClick={handleClick} className={styles.botonadd}>{boton}</button>
            <button className={styles.botoncancel}>{boton2}</button>


        </form>

    )
}

export default Form