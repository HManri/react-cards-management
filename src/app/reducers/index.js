import { combineReducers } from 'redux';
import cards from './cards';

const rootReducer = combineReducers({ cards });

export const mainReducer = (state, action) => {
    return rootReducer(state, action);
};
