import { selectReviewById } from '../../redux/entities/review/index';
import { selectUserById } from '../../redux/entities/user/index';
import { useSelector } from 'react-redux';
import styles from './review.module.sass';

export const Review = ({ id }) => {
    const review = useSelector(state => selectReviewById(state, id));
    const user = useSelector(state => selectUserById(state, review.userId));

    return (
        <li id={id} className={styles.item}>
            <div className={styles.author}>{user.name}:</div>
            <div className={styles.text}>{review.text} </div>
        </li>

    );
};