import { useForm } from "./hooks.js";
import { Counter } from '../counter/counter';
import styles from "./review-form.module.sass"

export const ReviewForm = () => {
    const { form, updateName, updateText, updateRating, sendReview } = useForm();

    const { name, text, rating } = form;

    const increment = () => {
        updateRating( rating + 1 );
    };

    const decrement = () => {
        updateRating(rating - 1);
    };

    return (
        <form className={styles.reviewForm} onSubmit={(e) => e.preventDefault()}>
            <h4 className={`sectionTitle ${styles.title}`}>Send a review</h4>
            <div className={styles.formInput}>
                <label>Name</label>
                <input
                    type={"text"}
                    name={"name"}
                    value={name}
                    onChange={(event) => {
                        updateName(event.target.value);
                    }}
                />
            </div>
            <div className={styles.formInput}>
                <label>Text</label>
                <textarea
                    name={"text"}
                    rows={5}
                    value={text}
                    onChange={(event) => {
                        updateText(event.target.value);
                    }}
                />
            </div>
            <div className={styles.formInput}>
                <label>Rate</label>
                <Counter
                    value={rating}
                    increment={increment}
                    decrement={decrement}
                    min={1}
                    max={5}
                />
            </div>

            <div className={styles.formInput}>
                <button className={styles.btn} onClick={ sendReview }>Send</button>
            </div>
            <br/>
        </form>
    );
};