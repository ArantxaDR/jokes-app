export interface JokeInterface {
	id: number,
	type: string,
	setup: string,
	punchline: string
}

export interface JokeListInterface {
	jokes: JokeInterface[]
}

 