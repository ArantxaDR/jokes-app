import axios, { AxiosResponse } from 'axios';
import { JokeInterface } from '../interfaces/dataInterface'


export const getRandomJokes = async (count: number = 1): Promise<JokeInterface[]> => {
  try {
    const response: AxiosResponse<JokeInterface[]> = await axios.get(
      `https://official-joke-api.appspot.com/jokes/random/${count}`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting jokes:', error);
    throw new Error('The jokes could not be obtained. Please try again later.');
  }
};
