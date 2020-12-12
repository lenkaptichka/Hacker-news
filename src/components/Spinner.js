import React from 'react';
import '../styles/Spinner.css'

function Spinner() {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner;