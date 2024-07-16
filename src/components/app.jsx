import { restaurants } from "../constants/mock";
import { Restaurant } from "./restaurant/restaurant";
import { Layout } from "./layout/layout";
import { Title } from './title/title.jsx';

export const App = () => {
    return (
        <div>
            <Layout>
                <Title title='Restaurants' />
                {restaurants.map((restaurant) => (
                    <Restaurant
                        item={restaurant}
                    />
                ))}
            </Layout>
        </div>
    );
};