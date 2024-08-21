import { Layout } from './layout/layout';
import { RestaurantsPage } from './restaurants-page/restaurants-page';
import { ProgressBar } from './progress-bar/progress-bar';
import './app.sass';
import { ThemeContextProvider } from './theme-context/theme-context';
import { AuthContextProvider } from './auth-context/auth-context';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RestaurantPage } from './restaurant-page/restaurant-page';
import { Menu } from './menu/menu.jsx';
import { Reviews } from './reviews/reviews.jsx';
import { Dish } from './dish/dish.jsx';

const router = createBrowserRouter([{
    path: '/',
    element: (
        <Layout />
    ),
    errorElement: <div>Not found</div>,
    children: [
        {
            path: '/restaurants',
            element: <RestaurantsPage />,
            children: [
                {
                    path: ':restaurantId',
                    element: <RestaurantPage />,
                    children: [
                        {
                            path: 'menu',
                            element: <Menu />,
                        },
                        {
                            path: 'reviews',
                            element: <Reviews />,
                        }
                    ],
                }
            ],
        },
        {
            path: "dish/:dishId",
            element: <Dish />,
        },
    ],
}]);

export const App = () => {
    return (
            <Provider store={store}>
                <ThemeContextProvider>
                    <ProgressBar />
                    <AuthContextProvider>
                        <RouterProvider router={router} />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </Provider>

    );
};