import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'Vikings', price: '10$', id: 1 },
    { name: 'Game of Thrones', price: '15$', id: 2 },
    { name: 'Inception', price: '20$', id: 3 }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
