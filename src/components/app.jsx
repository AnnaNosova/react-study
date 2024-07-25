import { Layout } from "./layout/layout";
import { Title } from './title/title.jsx';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import { ProgressBar } from './progress-bar/progress-bar';
import "./app.sass";
import { ThemeContextProvider } from './theme-context/theme-context.jsx';
import { AuthContextProvider } from './auth-context/auth-context.jsx';

export const App = () => {
    return (
        <ThemeContextProvider>
            <ProgressBar />
            <AuthContextProvider>
            <Layout>
                <Title title='Restaurants' />
                <RestaurantsPage />
            </Layout>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
};