import { Layout } from "./layout/layout";
import { Title } from './title/title.jsx';
import { RestaurantsPage } from './restaurants-page/restaurants-page';

export const App = () => {
    return (
        <div>
            <Layout>
                <Title title='Restaurants' />
                    <RestaurantsPage />
            </Layout>
        </div>
    );
};