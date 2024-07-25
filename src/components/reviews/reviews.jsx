import styles from "./reviews.module.sass"

export const Reviews = ( { reviews }) => {
    if (reviews?.length) {
        return (
            <div>
                <h4 className={"sectionTitle"}>Reviews</h4>
                <ul className={styles.review}>
                    {reviews.map(({ id, user, text }) => (
                        <li className={styles.reviewItem} key={ id }>
                            <div className={styles.reviewAuthor}>{ user }:</div>
                            <div className={styles.reviewText}>{ text }</div>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};