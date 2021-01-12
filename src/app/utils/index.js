import { SORT_ASC, SORT_DESC } from 'constants/Utils';

export function checkFieldMandatory(value) {
    if (!value) return false;
    return true;
}

export function sortByField(array, field, direction) {
    // return a new array object to be sure we are not changing the original reference
    if (!field || !direction || !array || array.length === 0 || !array[0].hasOwnProperty(field))
        return [...array];

    const data = [...array];
    return data.sort((a, b) => {
        const fieldA = a[field];
        const fieldB = b[field];
        switch (direction) {
            case SORT_ASC:
                if (fieldA < fieldB) return -1;
                if (fieldA > fieldB) return 1;
                return 0;
            case SORT_DESC:
                if (fieldA > fieldB) return -1;
                if (fieldA < fieldB) return 1;
                return 0;
            default:
                return 0;
        }
    });
}
