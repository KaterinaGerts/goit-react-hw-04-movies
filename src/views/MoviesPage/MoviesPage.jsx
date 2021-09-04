import React from 'react';
import s from './MoviesPage.module.css';
import { useState, useEffect } from "react";
import * as moviesApi from 'services/movie-api';

const MoviesPage = () => {
   const [query, setQuery] = useState('');

  useEffect(() => {
    if(!query) return;
    moviesApi
     .fetchForSearchMovies()
     .then(data => setQuery(data))    
   }, [query])

   const handleChange = e => {
    const value = e.currentTarget.value;
    setQuery(value.toLowerCase());
  };

const handleSubmit = e => {
  e.preventDefault();
  console.log(e.target.value);
}

  return (
    <form onSubmit={handleSubmit} className={s.inputContainer}>
      <input type="input" onChange={handleChange} className={s.input}/>
      <button type="button" className={s.buttomSearch}>Find the movie</button>      
    </form>
  )
}

export default MoviesPage;