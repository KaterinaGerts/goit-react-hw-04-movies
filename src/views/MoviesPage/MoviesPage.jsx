import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';
import Spinner from 'components/Loader';
import MovieSearch from 'components/MovieSearch';

const MoviesPage = () => {
  // const { movieId } = useParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  // const handleFormSubmit = query => {
  //   setQuery(query);
  //   setMovies([]);
  // };

  useEffect(() => {
    if (!query) {
      return;
    }

    const spinner = () => setStatus(Status.PENDING);

    moviesApi
      .fetchForSearchMovies(query)
      .then(movies => {
        if (movies.length === 0) {
          setStatus(Status.IDLE);
          toast.info('Please, try again your movie is not defind!');
        } else {
          setMovies(
            query => [...query, ...movies],
            setStatus(Status.RESOLVED),
          );
        }
      })
      .catch(error => setError(error), setStatus(Status.REJECTED));
    spinner();
  }, [movies, query]);

  const handleChange = e => {
    const value = e.currentTarget.value;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={s.inputContainer}>
        <input type="input" onChange={handleChange} className={s.input} />
        <button type="submit" className={s.buttomSearch}>
          Find the movie
        </button>
      </form>
      {status === Status.IDLE && (
        <div className={s.div}>Please, write a name of the movie!</div>
      )}
      {status === Status.PENDING && <Spinner />}
      {status === Status.REJECTED && <h1>{error}</h1>}
      {status === Status.RESOLVED && (
        <MovieSearch movies={movies} />
      )}

      <ToastContainer autoClose={2000} />
    </>
  );
};

export default MoviesPage;
