import { JokeInterface } from "../shared/interfaces/dataInterface";

export const DataService = () => {

	return fetch("http://localhost:5000/jokes")
		.then((response) => response.json())
		.then((data) => {
			return data.results.map((joke: JokeInterface) => {
				return {
					id: joke.id,
					setup: joke.setup,
					type: joke.type,
					punchline: joke.punchline

				}
			})
		})
}
