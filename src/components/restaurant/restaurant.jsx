import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.sass'
import { useTheme } from '../theme-context/hooks';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/index';

export const Restaurant = ({ id }) => {
    const { theme } = useTheme();
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const { name, menu: menuIds, reviews: reviewsIds } = restaurant || {};

    if ( !restaurant || !restaurant.name || !restaurant.id || !restaurant.menu || !restaurant.menu.length ) {
        return null;
    }

    return (
        <div key={id}>
            <h3 className={classnames(styles.name, {
                [styles.dark]: theme === DARK_THEME,
            })}>
                {name}
            </h3>
            <div>
                <Menu ids={menuIds}/>
            </div>
            <div>
                <Reviews ids={reviewsIds} />
            </div>
            <div>
                <ReviewForm />
            </div>
        </div>
    );
};