import { useState } from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../restaurant/restaurant';
import styles from "./restaurants-page.module.sass"

export const RestaurantsPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants[0].id
    );

    const activeRestaurant = restaurants.find(
        (item) => item.id === activeRestaurantId
    );

    return (
       <div>
           <div>
               <ul className={styles.restaurantsList}>
                   {restaurants.map(({id, name}) => (
                       <li>
                           <button className={styles.tabLink}
                               onClick={() => setActiveRestaurantId(id)}
                               disabled={id===activeRestaurantId}
                           >
                               {name}
                           </button>
                       </li>
                   ))}
               </ul>
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div className={styles.restaurantCard}>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
       </div>
    );
}