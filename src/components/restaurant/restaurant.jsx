import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from '../review-form/review-form';
import styles from "./restaurant.module.sass"


export const Restaurant = ({ restaurant }) => {

    if (!restaurant || !restaurant.name || !restaurant.id || !restaurant.menu || !restaurant.menu.length) {
        return null;
    }

    return (
        <div key={restaurant.id}>
            <h3 className={styles.name}> {restaurant.name} </h3>
            <div>
                <Menu menu={restaurant.menu}/>
            </div>
            <div>
                <Reviews reviews={restaurant.reviews} />
            </div>
            <div>
                <ReviewForm />
            </div>
        </div>
    );
};