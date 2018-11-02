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
  if (action.type === 'CHANGE_INGRIDIENTS') {
    return { ...state, ingridients: action.payload };
  }
  if (action.type === 'CHANGE_TOTAL_PRICE') {
    return { ...state, totalPrice: action.payload };
  }
  return { ...state };
}

export default reducer;
