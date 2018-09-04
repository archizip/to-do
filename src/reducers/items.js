const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return [
        ...state,
        ...action.items,
      ];
    case 'SET_ITEMS':
      return state = action.items;

    default:
      return state;
  }
};

export default items;
