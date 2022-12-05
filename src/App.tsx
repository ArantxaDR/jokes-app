import React from 'react';
import "./App.scss";
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { JokesDisplay } from './components/jokes-display/JokesDisplay';

function App() {
  return (
    <>
      <Header />
      <main className='main-container'>
        <h3 className='main-container__text'>Click the "Get random joke" to get a joke and the "Get punchline" button to start laughing.</h3>
        <JokesDisplay />
      </main>
      <Footer />
    </>
  );
}

export default App;
