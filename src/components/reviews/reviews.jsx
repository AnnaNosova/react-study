import styles from "./reviews.module.sass"

export const Reviews = ( { reviews }) => {
    if (reviews?.length) {
        return (
            <div>
                <h4 className={"section-title"}>Reviews</h4>
                <ul className={styles["review"]}>
                    {reviews.map(({ id, user, text }) => (
                        <li className={styles["review-item"]} key={ id }>
                            <div className={styles["review-author"]}>{ user }:</div>
                            <div className={styles["review-text"]}>{ text }</div>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};