import React from 'react';
import { IMG_URL } from 'constants/constants';
import s from './ActorsList.module.css';

 const ActorsList = ({cast}) => {
  return (
    <ul> {
      cast.map(({id, name, profile_path, character}) => (
        <li key={id}>
           <img src={`${IMG_URL}${ profile_path}`} alt={character} width="250" className={s.actorImage}/>
           <p>{name}</p>
           <p>{character}</p>
        </li>
      ))}
      
    </ul>
  )
}

export default ActorsList;