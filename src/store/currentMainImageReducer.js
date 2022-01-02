// Action Type
const UPDATE_CURRENT_MAIN_IMAGE = 'UPDATE_CURRENT_MAIN_IMAGE';

// Action creators
export const updateCurrentMainImage = (artwork) => {
  return {
    type: UPDATE_CURRENT_MAIN_IMAGE,
    payload: {
      artwork: artwork,
    },
  };
};

const initialState = {
  artwork: null,
};

const currentMainImageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CURRENT_MAIN_IMAGE:
      return {
        ...state,
        artwork: payload.artwork,
      };
    default:
      return state;
  }
};

export default currentMainImageReducer;
