// Action Type
const ON_SCROLL = 'ON_SCROLL';

// Action creators
export const updatePosition = (newPosition) => {
  return {
    type: ON_SCROLL,
    payload: {
      newPosition: newPosition,
    },
  };
};

const initialState = { start: 0, stop: 10 };

const onScrollReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_SCROLL:
      return payload.newPosition;
    default:
      return state;
  }
};

export default onScrollReducer;
