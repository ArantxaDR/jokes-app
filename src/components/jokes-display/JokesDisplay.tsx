import React, { useEffect, useState } from 'react';

import { Button } from '../../shared/button/Button';
import { JokeInterface } from '../../shared/interfaces/dataInterface';
import { dataService } from '../../shared/services/dataService';

import "./JokesDisplay.scss";
import loader from "../../assets/images/loader.svg";

export const JokesDisplay = () => {
	const [joke, setJoke] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dataService.fetchJokes<JokeInterface[]>("http://localhost:5000/jokes")
			.then((jokeItem) => {
				let newJoke = jokeItem;
				setJoke(`${newJoke[0].setup} ${newJoke[0].punchline}`);
			})

	}, [])

	return (
		<>
			<div className='jokes-container'>
				{loading ? (<img className='loading' src={loader} alt='loader' />) :
					<h6>{joke}</h6>}
			</div>
			<Button name="get-joke" title='Get random joke' />
		</>
	)
}
