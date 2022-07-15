let initialState = {
  items: [],
  item: {},
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "items/storeItems":
      return { ...state, items: action.payload };
    case "items/storeItemById":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
