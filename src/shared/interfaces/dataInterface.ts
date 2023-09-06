export interface JokeInterface {
	id: number,
	type: string,
	setup: string,
	delivery: string
}

export interface JokeListInterface {

	jokes: JokeInterface[]
}

 