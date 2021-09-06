import React from 'react';
import s from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
import { IMG_URL } from 'constants/constants';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { Status } from 'constants/constants';
import Spinner from 'components/Loader';
import { Route } from 'react-router-dom';
import Cast from '../Cast';
// import Reviews from '../Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesApi
      .fetchInfoAboutMovies(movieId)
      .then(data => {
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <div className={s.datailsContainer}>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && (
        <>
          <button
            type="button"
            className={s.button}
            onClick={() => {
              history.push(location?.state?.from ?? '/');
            }}
          >
            Go to back
          </button>{' '}
          <br />
          <img
            src={`${IMG_URL}${movie.poster_path}`}
            alt={movie.title}
            width="250"
            className={s.movieImage}
          />
          <h2>{movie.title}</h2> <br />
          <Link to={`/movies/${movieId}/cast`}>
            Cast          
          </Link>
        </>
      )}
      {status === Status.REJECTED && <h1>{error}</h1>}

     <Route path="/movies/:movieId/cast" component={Cast} /> 
      {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
    </div>
  );
};

export default MovieDetailsPage;
