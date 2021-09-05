import React from 'react';
import ActorsList from 'components/ActorsList';
import Spinner from 'components/Loader';
import { useState, useEffect } from 'react';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';
import { useParams } from 'react-router';


 const Cast = () => {
  const {movieId} = useParams();
  const [actorsData, setActorsData] = useState([]);
  
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    const spiner = () => {
      if (!actorsData) {
        setStatus(Status.PENDING);
      } else {
        setStatus(Status.RESOLVED);
      }
    };

    moviesApi
      .fetchAboutActorsOfMovie(movieId)
      .then(
        data => setActorsData( console.log(data.results.cast) ),
       
        setStatus(Status.RESOLVED),
      )
      .catch(error => setError(error), setStatus(Status.REJECTED));
    spiner();
  }, [actorsData, movieId]);

  return (
    <div>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && <ActorsList cast={actorsData}/>}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </div>
  );
};

export default Cast;