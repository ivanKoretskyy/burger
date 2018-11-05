import * as actionType from './actionType';

export const changeIngridients = (payload) => {
    return {
        type: actionType.CHANGE_INGRIDIENTS,
        payload
    }
}

export const changeprice = (payload) => {
    return {
        type: actionType.CHANGE_TOTAL_PRICE,
        payload
    }
} 