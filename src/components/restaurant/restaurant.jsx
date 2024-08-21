import styles from './restaurant.module.sass'
import { useTheme } from '../theme-context/hooks';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/index';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, } from 'react';

export const Restaurant = ({ id }) => {
    const { theme } = useTheme();
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    const { name } = restaurant || {};

    if ( !restaurant || !restaurant.name || !restaurant.id || !restaurant.menu || !restaurant.menu.length ) {
        return null;
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (restaurant) {
            navigate('menu', { replace: true });
        }
    }, [restaurant, navigate]);

    return (
        <div key={id}>
            <h3 className={classnames(styles.name, {
                [styles.dark]: theme === DARK_THEME,
            })}>
                {name}
            </h3>
            <nav>
                <NavLink
                    to={'menu'}
                    className={classnames(styles.tab, {
                        [styles.dark]: theme === DARK_THEME,
                    })}
                >
                    Menu
                </NavLink>
                <NavLink
                    to={'reviews'}
                    className={classnames(styles.tab, {
                        [styles.dark]: theme === DARK_THEME,
                    })}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};