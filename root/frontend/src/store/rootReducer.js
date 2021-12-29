import { combineReducers } from 'redux';
import { createStore } from 'redux';
import currentPageReducer from './currentPageReducer';
import modalReducer from './modalReducer';
import currentArtistIDReducer from './currentArtistIDReducer';
import currentMainImageReducer from './currentMainImageReducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  modal: modalReducer,
  artistID: currentArtistIDReducer,
  mainImage: currentMainImageReducer,
});
const store = createStore(rootReducer);

export default store;
