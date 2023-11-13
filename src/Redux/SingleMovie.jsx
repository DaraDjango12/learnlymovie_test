const initialState = {
    item: {},
  };
  export const FriendDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ITEM":
        return { ...state, item: action.payload.data };
      default:
        return state;
    }
  };