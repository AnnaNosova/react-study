export const Reviews = ( { reviews }) => {
    if (reviews?.length) {
        return (
            <div>
                <h4>Reviews</h4>
                <ul>
                    {reviews.map(({ id, text }) => (
                        <li key={ id }>
                            <div>{ text }</div>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};