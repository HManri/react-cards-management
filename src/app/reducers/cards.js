import { ADD_CARD, EDIT_CARD, DELETE_CARD, SORT_CARDS } from 'constants/ActionTypes';

const initialState = {
    list: [],
    sortBy: null,
    sortDirection: null,
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            return { ...state, list: [...state.list, { ...action.data }] };
        }
        case EDIT_CARD: {
            const cardIndex = state.list?.findIndex((e) => e.id === action.data?.id);
            if (cardIndex === -1) return state;

            return {
                ...state,
                list: [
                    ...state.list.slice(0, cardIndex),
                    { ...action.data },
                    ...state.list.slice(cardIndex + 1, state.list.lenght),
                ],
            };
        }
        case DELETE_CARD: {
            const cardIndex = state.list?.findIndex((e) => e.id === action.id);
            if (cardIndex === -1) return state;

            return {
                ...state,
                list: [
                    ...state.list.slice(0, cardIndex),
                    ...state.list.slice(cardIndex + 1, state.list.lenght),
                ],
            };
        }
        case SORT_CARDS: {
            return {
                ...state,
                sortBy: action.field,
                sortDirection: action.direction,
            };
        }
        default:
            return state;
    }
}
