import { Menu } from "../menu/menu";
import { Review } from "../review/review";
import { CounterContainer } from '../couner/container';


export const Restaurant = ({ restaurant }) => {

    if (!restaurant || !restaurant.name || !restaurant.id || !restaurant.menu || !restaurant.menu.length) {
        return null;
    }

    return (
        <div key={restaurant.id}>
            <h3> {restaurant.name} </h3>
            <h4>Menu</h4>
                <ul>
                    {restaurant.menu.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Menu name={menuItem.name} />
                            <CounterContainer />
                        </li>
                    ))}
                </ul>
            <h4>Reviews</h4>
                {restaurant.reviews?.length ? (
                    <ul>
                        {restaurant.reviews.map((review) => (
                            <li key={review.id}>
                                <Review text={review} />
                            </li>
                        ))}
                    </ul>
                ) : null}
        </div>
    );
};