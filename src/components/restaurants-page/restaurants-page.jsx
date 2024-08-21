import styles from './restaurants-page.module.sass';
import classnames from 'classnames';
import { useTheme } from '../theme-context/hooks';
import { DARK_THEME } from '../theme-context/constants';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurant/index';
import { RestaurantCard } from '../restaurant-card/restaurant-card.jsx';
import { Outlet } from 'react-router-dom';


export const RestaurantsPage = ({ className }) => {
    const { theme } = useTheme();
    const restaurants = useSelector(selectRestaurantsIds);

    if ( !restaurants ) {
        return null;
    }

    return (
       <div className={classnames(className, {
           [styles.dark]: theme === DARK_THEME,
       })}>
           <ul className={styles.restaurantsList}>
               {restaurants.map((id) => (
                   <li id={id}
                       className={classnames(className, {
                       [styles.dark]: theme === DARK_THEME,
                   })}>
                       <RestaurantCard id={id} />
                   </li>
                   ))}
           </ul>
           <Outlet />
       </div>
    );
}