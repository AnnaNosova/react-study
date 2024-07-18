import { useState } from 'react';
import { restaurants } from '../../constants/mock';
import { Restaurant } from '../restaurant/restaurant';

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
               <ul style={{listStyleType: "none"}}>
                   {restaurants.map(({id, name}) => (
                       <li>
                           <button style={{marginBottom: "5px"}}
                               onClick={() => setActiveRestaurantId(id)}
                               disabled={id===activeRestaurantId}
                           >
                               {name}
                           </button>
                       </li>
                   ))}
               </ul>
           </div>
           <div>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
           <div>
               {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
           </div>
       </div>
    );
}