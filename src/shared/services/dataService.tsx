import React from 'react'


class DataService {
	fetchJokes<T>(jokesURL: string): Promise<T> {
		return fetch(jokesURL).then(response => {
			return response.json()
		})
	}
}
export const dataService = new DataService();