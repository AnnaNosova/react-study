import { Layout } from './layout/layout';
import { Title } from './title/title';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import { ProgressBar } from './progress-bar/progress-bar';
import './app.sass';
import { ThemeContextProvider } from './theme-context/theme-context';
import { AuthContextProvider } from './auth-context/auth-context';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <ProgressBar />
                <AuthContextProvider>
                    <Layout>
                        <Title title='Restaurants' />
                        <RestaurantsPage />
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
};