import * as actionType from '../actions/actionType';

const initialState = {
  totalPrice: 5,
  ingridients: {
    meat: 0,
    bacon: 0,
    cheese: 0,
    salad: 0
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === actionType.CHANGE_INGRIDIENTS) {
    return { ...state, ingridients: action.payload };
  }
  if (action.type === actionType.CHANGE_TOTAL_PRICE) {
    return { ...state, totalPrice: action.payload };
  }
  return { ...state };
}

export default reducer;
