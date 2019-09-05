import React from 'react'
const Notification = ({ message }) => {

	const messageStyle = {
		color: 'green',
		background: 'lightgray',
		fontSize: 16,
		borderStyle: 'solid',
		borderRadius: 4,
		padding: 5,
		marginBottom: 5
	}
	if (message !== null) {
		return (
	  		<div style={messageStyle}>
				{message}
	  		</div>
		)
	} else return null
}

export default Notification