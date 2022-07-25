import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import TablaPersonas from './components/TablaPersonas';



// esta es la segunda version


function App() {
  const [openForm, setOpenForm] = useState(false);
  const onEdit = () =>{
    setOpenForm(true)
  }

  const [listaPersonas, setListaPersonas] = useState([
    {id: 1, name : 'Pato', lastName : 'Purzxxzisich', email : 'ghasdh@jafop', country : 'Rumania'},
    {id: 2, name : 'Mario', lastName : 'Purasd', email : 'afsasddh@jafop', country : 'Albania'},
    {id: 3, name : 'Quique', lastName : 'Rodrigie', email : 'hasdzzh@jafop', country : 'Polonia'},
    {id: 4, name : 'Al Hasal', lastName : 'Purisich', email : 'gsdasdh@jafop', country : 'Rumania'},
    {id: 5, name : 'Loco', lastName : 'Lope', email : 'asdasdh@jafop', country : 'Albania'},
  ])
  
const calculateNewId = () =>{
  if(listaPersonas.length == 0){
    return 1}
  else{
    const lastElement = listaPersonas[listaPersonas.length -1]
  return lastElement.id +1
}}

    const onAdd = (persona) => {
      const newId = calculateNewId()
      const newPerson = {...persona, id: newId}
      setListaPersonas(
        [...listaPersonas, newPerson]
      )
    }

    const deletePerson = (id) => {
      setListaPersonas(listaPersonas.filter(personToDelete => personToDelete.id !== id))
    }




      return (
        <>
        
        <Form onAdd={onAdd}  boton="Add" boton2={false} namePlaceholder="Enter name..." lastNamePlaceholder="Enter last name" 
        emailPlaceholder="Enter E-Mail" countryPlaceholder="Enter Country"/>

        {openForm && <Form boton="Edit" boton2="Cancel" namePlaceholder="Enter new name..." lastNamePlaceholder="Enter new last name" 
        emailPlaceholder="Enter new E-Mail" countryPlaceholder="Enter new Country"></Form>}

        <TablaPersonas onEdit={onEdit} listaPersonas={listaPersonas} deletePerson={deletePerson}/>
        
        </>
      );
    }

    export default App;
