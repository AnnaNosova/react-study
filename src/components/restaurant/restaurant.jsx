import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from '../review-form/review-form';
import styles from "./restaurant.module.sass"
import { useTheme } from '../theme-context/theme-context.jsx';
import classnames from 'classnames';


export const Restaurant = ({ restaurant }) => {

    if (!restaurant || !restaurant.name || !restaurant.id || !restaurant.menu || !restaurant.menu.length) {
        return null;
    }

    const { value: themeValue } = useTheme();

    return (
        <div key={restaurant.id}>
            <h3 className={classnames(styles.name, {
                [styles.dark]: themeValue === "dark",
            })}>
                {restaurant.name}
            </h3>
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