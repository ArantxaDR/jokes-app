import axios from 'axios';
import { JokeInterface } from '../interfaces/dataInterface'


export const getJokes = () => {
	const getAllJokes = axios.get<JokeInterface[]>("http://localhost:5000/jokes")
		.then((response) => response.data);

	return getAllJokes;

}

