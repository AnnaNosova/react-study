import { Restaurant } from '../restaurant/restaurant';
import styles from './restaurants-page.module.sass';
import classnames from 'classnames';
import { useTheme } from '../theme-context/hooks';
import { DARK_THEME } from '../theme-context/constants';
import { useSelector } from 'react-redux';
import { selectRestaurantIds, selectRestaurantById, selectRestaurantNames } from '../../redux/entities/restaurant/index';
import { useState } from 'react';


export const RestaurantsPage = ({ className }) => {
    const { theme } = useTheme();
    const ids = useSelector(selectRestaurantIds);
    const names = useSelector(selectRestaurantNames);

    if ( !ids ) {
        return null;
    }

    const [activeRestaurantId, setActiveRestaurantId] = useState(ids[0]);
    const activeRestaurant = useSelector((state) => selectRestaurantById(state, activeRestaurantId));


    return (
       <div className={classnames(className, {
           [styles.dark]: theme === DARK_THEME,
       })}>
           <div>
               <ul className={styles.restaurantsList}>
                   {ids.map((id, index) => (
                       <li>
                           <button className={styles.tabLink}
                                   onClick={() => setActiveRestaurantId(id)}
                                   disabled={id===activeRestaurantId}
                           >
                               {names[index]}
                           </button>
                        </li>
                   ))}
               </ul>
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant id={activeRestaurantId}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant id={activeRestaurantId}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant id={activeRestaurantId}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant id={activeRestaurantId}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant id={activeRestaurantId}/>}
           </div>
       </div>
    );
}