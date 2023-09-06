import axios from 'axios';
import { JokeInterface } from '../interfaces/dataInterface'


export const getJokes = () => {
	const getAllJokes = axios.get<JokeInterface[]>("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=twopart")
		.then((response) =>response.data);

	return getAllJokes;

}

