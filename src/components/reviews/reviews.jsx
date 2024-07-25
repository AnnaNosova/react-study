import styles from "./reviews.module.sass"
import classnames from 'classnames';
import { useTheme } from '../theme-context/theme-context.jsx';

export const Reviews = ( { reviews }) => {
    if (reviews?.length) {

        const { value: themeValue } = useTheme();

        return (
            <div>
                <h4 className={classnames(styles.sectionTitle, {
                    [styles.dark]: themeValue === "dark",
                })}>
                    Reviews
                </h4>
                <ul className={styles.review}>
                    {reviews.map(({ id, user, text }) => (
                        <li className={styles.item} key={ id }>
                            <div className={styles.author}>{ user }:</div>
                            <div className={styles.text}>{ text }</div>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};