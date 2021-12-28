import { combineReducers } from 'redux';
import { createStore } from 'redux';
import currentPageReducer from './currentPageReducer';
import modalReducer from './modalReducer';
import currentArtistIDReducer from './currentArtistIDReducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  modal: modalReducer,
  artistID: currentArtistIDReducer,
});
const store = createStore(rootReducer);

export default store;
