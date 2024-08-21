import styles from './reviews.module.sass';
import { Review } from '../review/review';
import { ReviewForm } from '../review-form/review-form.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/index.js';

export const Reviews = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );
    const { reviews } = restaurant;

    return (
        <div>
            <div>
                <div className={styles.review}>
                    {reviews.map((id) => {
                        return <Review id={id} />
                    }) }
                </div>
            </div>
            <div>
                <ReviewForm />
            </div>
        </div>
    );
};