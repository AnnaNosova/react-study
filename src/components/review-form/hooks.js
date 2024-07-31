import { useReducer } from 'react';

const INITIAL_FORM = {
    name: '',
    text: '',
    rating: 0,
};

function reducer(state, { type, payload }) {

    switch (type) {
        case 'setName':
            return {
                ...state,
                name: payload,
            };
        case 'setText':
            return {
                ...state,
                text: payload,
            };
        case 'setRating':
            return {
                ...state,
                rating: payload,
            };
        case 'sendReview':
            return {
                ...INITIAL_FORM,
            }
        default:
            return state;
    }
}


export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

    const updateName = (name) => dispatch({ type: 'setName', payload: name });
    const updateText = (text) => dispatch({ type: 'setText', payload: text });
    const updateRating = (rating) => dispatch({ type: 'setRating', payload: rating });
    const sendReview = () => dispatch({ type: 'sendReview', payload: INITIAL_FORM });

    return {
        form,
        updateName,
        updateText,
        updateRating,
        sendReview,
    };
};