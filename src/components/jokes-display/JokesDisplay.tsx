import { useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import { JokeInterface } from "../../shared/interfaces/dataInterface";
import "./JokesDisplay.scss";
import loader from "../../assets/images/loader.svg";
import { getRandomJokes } from "../../shared/services/dataService";

export const JokesDisplay = () => {
  // Estados para almacenar chistes, chiste actual, estado de carga, punchline y errores
  const [jokes, setJokes] = useState<JokeInterface[]>([]);
  const [joke, setJoke] = useState<JokeInterface | null>(null); // Permitir null
  const [loading, setLoading] = useState<boolean>(true);
  const [punchline, setPunchline] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getRandomJokes(10);
        setJokes(response);
        getRandomJoke(response);
      } catch (error) {
        setError("There seems to be no jokes left. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePunchline = () => {
    setPunchline(true);
  };

  const getRandomJoke = (jokesList: JokeInterface[] = jokes) => {
    if (jokesList.length === 0) return;

    const min = 0;
    const max = jokesList.length - 1;
    const indexJoke = Math.floor(Math.random() * (max - min + 1)) + min;

    setJoke(jokesList[indexJoke]);
    setPunchline(false);
  };

  return error ? (
    <h3 className="jokes-container__text">{error}</h3>
  ) : (
    <>
      <div className="jokes-container">
        {loading ? (
          <img className="loading" src={loader} alt="loader" />
        ) : (
          <h2 className="jokes-container__text setup">{joke?.setup}</h2>
        )}
        {punchline && joke && (
          <h3 className="jokes-container__text punchline">{joke.punchline}</h3>
        )}
      </div>
      <div className="jokes-container__buttons">
        <div className='jokes-container__buttons-display'>
          <Button
            name="get-joke"
            title="Get random joke"
            handleAction={() => getRandomJoke(jokes)}
          />
          <Button
            name="get-punchline"
            title="Get punchline"
            handleAction={handlePunchline}
          />
        </div>
      </div>
    </>
  );
};
