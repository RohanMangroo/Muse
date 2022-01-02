// Action Type
const UPDATE_CURRENT_ARTIST_ID = 'UPDATE_CURRENT_ARTIST_ID';

// Action creators
export const updateCurrentArtistID = (id) => {
  return {
    type: UPDATE_CURRENT_ARTIST_ID,
    payload: {
      currentArtistID: id,
    },
  };
};

const initialState = {
  id: '1',
};

const currentArtistIDReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CURRENT_ARTIST_ID:
      return {
        ...state,
        id: payload.currentArtistID,
      };
    default:
      return state;
  }
};

export default currentArtistIDReducer;
