import React from 'react';
import ActorsList from 'components/ActorsList';
import Spinner from 'components/Loader';
import { useState, useEffect } from 'react';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';
import { useParams } from 'react-router';

const Cast = () => {
  const { movieId } = useParams();
  const [actorsData, setActorsData] = useState([]);

  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesApi
      .fetchAboutActorsOfMovie(movieId)
      .then(data => {
        console.log(data);
        setActorsData(data.cast);

        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <div>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <ActorsList cast={actorsData} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </div>
  );
};

export default Cast;
