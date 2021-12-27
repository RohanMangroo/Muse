// Action Type
const UPDATE_MODEL = 'UPDATE_MODEL';

// Action creators
export const updateModel = (boolean) => {
  return {
    type: UPDATE_MODEL,
    payload: {
      openModel: boolean,
    },
  };
};

const initialState = false;

const modelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MODEL:
      return payload.openModel;
    default:
      return state;
  }
};

export default modelReducer;
