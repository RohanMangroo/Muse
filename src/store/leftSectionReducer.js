// Action Type
const UPDATE_LEFT_SECTION = 'UPDATE_LEFT_SECTION';

// Action creators
export const updateLeftSection = (boolean) => {
  return {
    type: UPDATE_LEFT_SECTION,
    payload: {
      open: boolean,
    },
  };
};

const initialState = {
  open: false,
};

const barsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_LEFT_SECTION:
      return {
        ...state,
        open: payload.open,
      };
    default:
      return state;
  }
};

export default barsReducer;
