import styles from './reviews.module.sass';
import classnames from 'classnames';
import { useTheme } from '../theme-context/hooks';
import { DARK_THEME } from '../theme-context/constants';
import { Review } from '../review/review';

export const Reviews = ({ ids }) => {
    const { theme } = useTheme();

    return (
        <div>
            <h4 className={classnames(styles.sectionTitle, {
                [styles.dark]: theme === DARK_THEME,
            })}>
                Reviews
            </h4>
            <ul className={styles.review}>
                {ids.map((id) => {
                    return <Review id={id} />
                }) }
            </ul>
        </div>
    );
};