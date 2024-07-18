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
            <div>
                <h4>Menu</h4>
                <ul style={{listStyleType: "none"}}>
                    {restaurant.menu.map(({id, name, price}) => (
                        <li key={id}>
                            <Menu name={name} price={price} />
                            <CounterContainer />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Reviews</h4>
                    {restaurant.reviews?.length ? (
                        <ul>
                            {restaurant.reviews.map(({id, text}) => (
                                <li key={id}>
                                    <Review text={text} />
                                </li>
                            ))}
                        </ul>
                    ) : null}
            </div>
        </div>
    );
};