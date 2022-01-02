import { combineReducers } from 'redux';
import { createStore } from 'redux';
import modalReducer from './modalReducer';
import currentArtistIDReducer from './currentArtistIDReducer';
import currentMainImageReducer from './currentMainImageReducer';
import onScrollReducer from './onScrollReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  artistID: currentArtistIDReducer,
  mainImage: currentMainImageReducer,
  currentPosition: onScrollReducer,
});
const store = createStore(rootReducer);

export default store;
