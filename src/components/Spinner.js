import React from 'react';
import '../styles/Spinner.css'

function Spinner() {
	return (
		<div className="spinner">
			<div className="spinner__item"></div>
			<div className="spinner__item"></div>
			<div className="spinner__item"></div>
			<div className="spinner__item"></div>
		</div>
	)
}

export default Spinner;