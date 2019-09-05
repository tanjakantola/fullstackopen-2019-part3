import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  
  const [ persons, setPersons] = useState([
    { name: '' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newMessage, setNewMessage ] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
 
  const handleNameChange = (event) => {
    setNewName (event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber (event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
    }
  
    axios
    .post('http://localhost:3001/api/persons', contactObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      setNewMessage(`Added ${newName}`);
      setTimeout(() => {
          setNewMessage(null)
      }, 2000);
    })
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
		if ( window.confirm(`Deleting ${person.name}`)) {
			personService.remove(id)
      setPersons(persons.filter(p => p.id !== id))
      setNewMessage(`Deleted ${person.name}`);
      setTimeout(() => {
          setNewMessage(null)
      }, 2000);
			}
	}

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMessage} />
      <h2>Add new contact</h2>
      <PersonForm
				submitEvent={addPerson}
				newName={newName}
				handleNameChange={handleNameChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
      
      <h2>Contacts</h2>
      <Persons
        persons={persons}
        deleteContact={deletePerson}
      />
    </div>
  )

}

export default App