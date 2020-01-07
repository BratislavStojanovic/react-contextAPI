import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import Nav from './components/Nav';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
