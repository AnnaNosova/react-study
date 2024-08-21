import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Outlet } from 'react-router-dom';
import { Cart } from '../cart/cart.jsx';
import { Title } from '../title/title.jsx';
import { Main } from '../main/main.jsx';

export const Layout = () => {
    return (
        <div>
            <Header />
            <Title title='Restaurants' />
            <Main />
            <Outlet />
            <Cart />
            <Footer />
        </div>
    );
};