import React from 'react';
import './Card.style.css';
const Card = (props) => {
	return (
		<div key={props.monster.id} className="card-container">
			<img
				src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
				alt={props.monster.username}
			/>
			<h1> {props.monster.name}</h1>
			<h2>@ {props.monster.username}</h2>
		</div>
	);
};

export default Card;
