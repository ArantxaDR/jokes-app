import React, { useEffect, useState } from 'react';

import { Button } from '../../shared/button/Button';
import { JokeInterface } from '../../shared/interfaces/dataInterface';


import "./JokesDisplay.scss";
import loader from "../../assets/images/loader.svg";
import { getJokes } from '../../shared/services/dataService';


export const JokesDisplay = () => {
	const [jokes, setJokes] = useState<JokeInterface[]>([]);
	const [joke, setJoke] = useState<JokeInterface>();
	const [loading, setLoading] = useState(true);
	const [punchline, setPunchline] = useState(false);
	useEffect(() => {
		getJokes().then((response) => {
			setJokes(response);
		}).catch(error => {
			alert(error);
		})
		setLoading(false);
	}, [])

	const handlePunchline = () => {
		setPunchline(true)
	}

	const getRandomJoke = () => {
		let min = 0;
		let max = jokes.length;
		let indexJoke = Math.floor(Math.random() * (max - min + 1)) + min;

		setJoke(jokes[indexJoke]);
		setPunchline(false);
	}

	return (
		<>
			<div className='jokes-container'>
				{loading ? (<img className='loading' src={loader} alt='loader' />) :
					<h2>{joke && joke.setup}</h2>}
				<Button name="get-punchline" title='Get punchline' handleAction={handlePunchline} />
				{punchline ? (<h1>{joke && joke.punchline}</h1>) : ""}
			</div>
			<Button name="get-joke" title='Get random joke' handleAction={getRandomJoke} />
		</>
	)
}
