import { useForm } from "./hooks";
import { Counter } from '../counter/counter';

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
            <form>
                <h4>Send a review</h4>
                <label>Name  </label>
                <input
                    type={"text"}
                    name={"name"}
                    value={name}
                    onChange={(event) => {
                        updateName(event.target.value);
                    }}
                />
                <div><br/></div>
                <label>Text  </label>
                <input
                    type={"text"}
                    name={"text"}
                    value={text}
                    onChange={(event) => {
                        updateText(event.target.value);
                    }}
                />
                <div><br/></div>
                <label>Rate</label>
                <Counter
                    value={rating}
                    increment={increment}
                    decrement={decrement}
                    min={0}
                    max={5}
                />
                <br/>

                <div>
                    <button onClick={ sendReview }>Send</button>
                </div>
                <br/>
            </form>
    );
};