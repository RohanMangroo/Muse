// Action Type
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

// Action creators
export const updateCurrentPage = (page) => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: {
      currentPage: page,
    },
  };
};

const initialState = {
  currentPage: 'landingPage',
};

const currentPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage,
      };
    default:
      return state;
  }
};

export default currentPageReducer;
