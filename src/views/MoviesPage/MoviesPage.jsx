import React from 'react';
import { toast } from 'react-toastify';
import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';
import Spinner from 'components/Loader';
import MoviesList from 'components/MoviesList';
import { useLocation, useHistory } from 'react-router';

const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setStatus(Status.PENDING);

    moviesApi
      .fetchForSearchMovies(searchQuery)
      .then(data => {
        if (data.results.length === 0) {
          setStatus(Status.IDLE);
          toast.error('Please, try again your movie is not defind!');
        } else {
          setMovies([...data.results]);
          setStatus(Status.RESOLVED);
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.movieName.value;
    const queryNormalize = query.toLowerCase();
    if (!queryNormalize) {
      toast.info('Please, write your movie request!');
      return;
    }
    history.push({
      ...location,
      search: `query=${queryNormalize}`,
    });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.inputContainer}>
        <input name="movieName" type="input" className={s.input} />
        <button type="submit" className={s.buttomSearch}>
          Find the movie
        </button>
      </form>
      {status === Status.IDLE && (
        <div className={s.div}>Please, write a name of the movie!</div>
      )}
      {status === Status.PENDING && <Spinner />}
      {status === Status.REJECTED && <h1>{error}</h1>}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
