import s from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ review }) => {
  return (
    <>
   {review.length === 0 ? (
       <p className={s.noReview}> This movie has no reviews, you can be the first!</p>
      ) : (
    <ul className={s.actorContainer}> 
      {review.map(({ id, content, author }) => {
       
        return <li key={id} className={s.li}>
          <p className={s.author}>
               {author}:
            </p>    
            
            <p className={s.text}>
               {content}
            </p>            
          </li>        
      }
      )}
    </ul>)}
    </>
  );
};

ReviewsList.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,     
    }),
  ),
}

export default ReviewsList;
