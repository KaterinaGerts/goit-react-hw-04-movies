import React from 'react';
import ReviewsList from 'components/ReviewsList';
import Spinner from 'components/Loader';
import { useState, useEffect } from 'react';
import * as moviesApi from 'services/movie-api';
import { Status } from 'constants/constants';
import { useParams } from 'react-router';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesApi
      .fetchOfReviewOfMovie(movieId)
      .then(data => {
        setReview(data.results);

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
      {status === Status.RESOLVED && <ReviewsList review={review} />}
      {status === Status.REJECTED && <h1>{error}</h1>}
    </div>
  );
};

export default Reviews;
