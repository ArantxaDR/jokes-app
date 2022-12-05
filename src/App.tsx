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
        <p>Click the random joke button to get a joke and the punchline button to start laughing</p>
        <JokesDisplay />
      </main>
      <Footer />
    </>
  );
}

export default App;
