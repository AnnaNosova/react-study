import { NavLink } from 'react-router-dom';
import styles from './restaurant-card.module.sass';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/index.js';
import classnames from 'classnames';
import { DARK_THEME } from '../theme-context/constants.js';
import { useTheme } from '../theme-context/hooks.js';

export const RestaurantCard = ({ className, id }) => {
    const { theme } = useTheme();
    const { name, img } = useSelector((state) => selectRestaurantById(state, id)) || {};

    if(!name) {
        return null;
    }

    return (
        <div key={id}>
            <NavLink to={id}
                  className={classnames(styles.tabLink, className, {
                      [styles.dark]: theme === DARK_THEME,
                  })}
            >
                <div className={styles.img}>
                    <img src={img} alt={name} />
                </div>
                <div>
                    {name}
                </div>
            </NavLink>
        </div>
    )
}