import React from "react";
import { useState } from "react";
import styles from './TablaPersonas.module.css';




const TablaPersonas = ({ listaPersonas, deletePerson, onEdit }) => {



    const handleDelete = (id) => {

        deletePerson(id)
    }


    const openEdit = () => {
        onEdit()
    }

    return (

        <table className={styles.tablaPersonas}>
            <thead className={styles.theadTabla}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                    <th>Country</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {listaPersonas.map((persona, index) => (
                    <tr key={`id-${persona.id}`}>

                        <td>{persona.id}</td>
                        <td>{persona.name}</td>
                        <td>{persona.lastName}</td>
                        <td>{persona.email}</td>
                        <td>{persona.country}</td>
                        <td>
                            <button onClick={openEdit} className={styles.botonedit}>Edit</button>
                            <button onClick={() => handleDelete(persona.id)} className={styles.botondelete}>Delete</button>
                        </td>
                    </tr>))}
            </tbody>



        </table>


    )
}

export default TablaPersonas