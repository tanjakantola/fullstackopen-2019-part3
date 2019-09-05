import React from 'react'

const PersonForm = ({submitEvent, newName, newNumber, handleNameChange, handleNumberChange}) => {
	return (
		<form
		  onSubmit={submitEvent}>
		<div>
          Name:  <input value={newName} 
          onChange={handleNameChange}/>
		</div>
		<div>
          Number: <input value={newNumber} 
          onChange={handleNumberChange}/>
		</div>
		<div>
			<button type="submit">ADD</button>
		</div>
		</form>
	)
}

export default PersonForm