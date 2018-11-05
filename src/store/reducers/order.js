import * as actionType from '../actions/actionType';

const initialState =
{
    orders: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ORDER_SUBMIT_SUCCESS:
            const newOrder = action.payload;
            return {
                ...state,
                orders: [...state.orders, newOrder],
                loading: false
            };

        case actionType.ORDER_SUBMIT_FAIL:
            const error = action.payload;
            return {
                ...state,
                loading: false,
                error: error
            };

        case actionType.ORDER_SUBMIT_START:

            return {
                ...state,
                loading: true,
            };

        default:
            return {
                ...state
            }
    }
}
export default reducer;