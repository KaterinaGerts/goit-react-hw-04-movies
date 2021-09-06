import React from 'react';
import s from './MovieDetailsPage.module.css';
import { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router';
import * as moviesApi from 'services/movie-api';
import { IMG_URL } from 'constants/constants';
import { useHistory, Link, useLocation } from 'react-router-dom';
import { Status } from 'constants/constants';
import Spinner from 'components/Loader';
import { Route, Switch } from 'react-router-dom';

const Cast = lazy(() =>
  import('../Cast' /* webpackChunkName: "cast" */),
);

const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "reviews" */),
);


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);
  const history = useHistory();
  const location = useLocation();
  console.log(location);

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
          <div className={s.container}>
            <img
              src={`${IMG_URL}${movie.poster_path}`}
              alt={movie.title}
              width="250"
              className={s.movieImage}
            />
            <div>
              <h2 className={s.text}>{movie.title}</h2>
              <p className={s.movieText}>
                <span className={s.span}> User score:</span>
                {movie.vote_count}</p>
              <p className={s.movieText}>
                <span className={s.span}>Overview:</span>
                 {movie.overview}</p>
              <ul>
                <span className={s.span}>Genres:</span>
                
                {movie.genres.map(({ id, name }) => (
                  <li className={s.movieText} key={id}>{name}</li>
                ))}
              </ul>{' '}
            </div>
          </div>{' '}
          <br />
          <Link to={`/movies/${movieId}/cast`} className={s.title}>
            Cast
          </Link>
          <Link to={`/movies/${movieId}/reviews`} className={s.title}>
            Reviews
          </Link>
        </>
      )}
      {status === Status.REJECTED && <h1>{error}</h1>}
      <Switch>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </div>
  );
};

export default MovieDetailsPage;
