import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateModal } from '../store/modalReducer';
import { updateCurrentArtistID } from '../store/currentArtistIDReducer';
import { updateCurrentMainImage } from '../store/currentMainImageReducer';

function RandomImages({
  images,
  updateModal_,
  updateCurrentArtistID_,
  updateCurrentMainImage_,
}) {
  function handleClick(img) {
    updateModal_(true);
    updateCurrentArtistID_(img.artistid);
    updateCurrentMainImage_(img);
  }

  return images.map((img) => {
    const name =
      img.artist_name.split(' ').length > 1
        ? img.artist_name.split(' ').slice(1).join(' ')
        : img.artist_name;
    return (
      <div
        style={{
          backgroundImage: `url(https://www.artic.edu/iiif/2/${img.imageid}/full/400,/0/default.jpg)`,
        }}
        className="random-art-card flex-col"
        key={uuidv4()}
        onClick={() => handleClick(img)}
      >
        <div></div>
        <div className="center-item">
          <h3>{name}</h3>
        </div>
      </div>
    );
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal_: (boolean) => {
      return dispatch(updateModal(boolean));
    },
    updateCurrentArtistID_: (id) => {
      return dispatch(updateCurrentArtistID(id));
    },
    updateCurrentMainImage_: (artwork) => {
      return dispatch(updateCurrentMainImage(artwork));
    },
  };
};

export default connect(null, mapDispatchToProps)(RandomImages);
