import React, { useState } from 'react';
import axios from 'axios';
import './IceMaker.css';
import ice from './ice.png';

function IceMaker() {
	const [iceStatus, setIceStatus] = useState(false);

	const handleIceButton = () => {
		axios
			.get('https://04d7a5fbfa6343a51c025fabb1e1cca7.balena-devices.com/iceOn')
			// axios.get('http://10.0.0.9/iceOn')
			.then((response) => {
				console.log(response.data);
				setIceStatus(response.data.iceOn);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleIceStatusFlip = () => {
		axios
			.get('https://04d7a5fbfa6343a51c025fabb1e1cca7.balena-devices.com/iceStatusFlip')
			.then((response) => {
				console.log(response.data);
				setIceStatus(response.data.iceOn);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<header>
				<h1>Ice Maker</h1>
			</header>
			<div className="status">
				<p>Ice Maker Status: {iceStatus ? 'On' : 'Off'}</p>
			</div>
			<div className='main'>
        <img onClick={handleIceButton} className='iceImage' src={ice} alt="Ice Cube" />
        <br />
				<button onClick={handleIceStatusFlip}>Toggle Ice Maker Status</button>
			</div>
		</div>
	);
}

export default IceMaker;
