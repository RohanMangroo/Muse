// Action Type
const UPDATE_MODAL = 'UPDATE_MODAL';

// Action creators
export const updateModal = (boolean) => {
  return {
    type: UPDATE_MODAL,
    payload: {
      openModel: boolean,
    },
  };
};

const initialState = false;

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MODAL:
      return payload.openModel;
    default:
      return state;
  }
};

export default modalReducer;
