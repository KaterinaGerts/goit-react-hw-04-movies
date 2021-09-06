import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';
import { IMG_URL } from 'constants/constants';
import defaultImage from 'helpers/image.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.movieList}>
      {movies.map(({ id, title, poster_path }) => {
        const movieImg = poster_path
          ? `${IMG_URL}${poster_path}`
          : defaultImage;
        return (
          <li className={s.list} key={id}>
            <Link
              className={s.link}
              to={{ pathname: `/movies/${id}`, state: { from: location } }}
            >
              <img
                src={movieImg}
                alt={title}
                width="300"
                height="430"
                className={s.imageList}
              />
              <p className={s.title}>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,     
    }),
  ),
}

export default MoviesList;
