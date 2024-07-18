import { Layout } from "./layout/layout";
import { Title } from './title/title.jsx';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import { ProgressBar } from './progress-bar/progress-bar';

export const App = () => {
    return (
        <div>
            <ProgressBar />
            <Layout>
                <Title title='Restaurants' />
                <RestaurantsPage />
            </Layout>
        </div>
    );
};