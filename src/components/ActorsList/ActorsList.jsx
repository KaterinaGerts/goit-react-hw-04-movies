import React from 'react';
import { IMG_URL } from 'constants/constants';
import s from './ActorsList.module.css';
import defaultImg from 'helpers/default-img.png'

const ActorsList = ({ cast }) => {
  return (
    <ul className={s.actorContainer}>
      {' '}
      {cast.map(({ id, name, profile_path, character }) => {
        const actorImg = profile_path
        ? `${IMG_URL}${profile_path}`
        : defaultImg;
        return <li key={id} className={s.li}>
            <img
              src={actorImg}
              alt={character}
              width="140"
              height="200"
              className={s.actorImage}
            />
            <p className={s.title}>
              <span className={s.titleDescr}>Actor:</span> {name}
            </p>
            <p className={s.title}>
              {' '}
              <span className={s.titleDescr}>Character:</span> {character}
            </p>
          </li>        
      }
      )}
    </ul>
  );
};

export default ActorsList;
