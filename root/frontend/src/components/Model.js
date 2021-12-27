import { connect } from 'react-redux';
import { updateModel } from '../store/modelReducer';

function Model({ updateModel_ }) {
  function handleClick() {
    updateModel_(false);
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
    updateModel_: (boolean) => {
      return dispatch(updateModel(boolean));
    },
  };
};

export default connect(null, mapDispatchToProps)(Model);
