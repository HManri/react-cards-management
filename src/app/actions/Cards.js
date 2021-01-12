import { ADD_CARD, EDIT_CARD, DELETE_CARD, SORT_CARDS } from 'constants/ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export function saveCard(data) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            if (!data) {
                reject('There is no data to save');
                return;
            }
            if (!data.id || data.id === -1) {
                // is a creation
                data.id = uuidv4();
                data.creation = Date.now();
                dispatch({ type: ADD_CARD, data });
            } else {
                // is an update
                dispatch({ type: EDIT_CARD, data });
            }
            resolve();
        });
}

export function deleteCard(id) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            if (!id) {
                reject('ID parameter is needed');
                return;
            }
            dispatch({ type: DELETE_CARD, id });
        });
}

export function sortCards(field, direction) {
    return (dispatch) =>
        new Promise((resolve, reject) => {
            if (!field) {
                reject('Sort field is needed');
                return;
            }
            dispatch({ type: SORT_CARDS, field, direction });
        });
}
