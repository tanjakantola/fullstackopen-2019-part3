import React from 'react'

const Persons = ({ persons, deleteContact }) => {
	
	const rows = () => persons.map(person =>
		<Person key={person.id} name={person.name} number={person.number} 
		deleteContact={() => deleteContact(person.id)}/>
	)

	const Person = ({name, number, deleteContact }) => 
    (<li>
        {name}: {number} 
        <button onClick={deleteContact}>
            DELETE
        </button>
    </li>)

	return (
		<ul>
			{rows()}
		</ul>
	)
}
export default Persons