import { connect } from 'react-redux';
import { updateModal } from '../store/modalReducer';

function Modal({ updateModal_ }) {
  function handleClick() {
    updateModal_(false);
  }
  return (
    <div className="model-container center-item">
      <div className="model">
        <button onClick={() => handleClick()}>Close</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal_: (boolean) => {
      return dispatch(updateModal(boolean));
    },
  };
};

export default connect(null, mapDispatchToProps)(Modal);
