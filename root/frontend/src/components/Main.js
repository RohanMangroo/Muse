import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Top from './Top';
import '../styles/model.css';

/*Main Component*/
function Main() {
  return (
    <>
      <main className="main-container flex-col">
        <Top />
        <Search />
      </main>
    </>
  );
}

const mapStateToProps = ({ model }) => {
  return {
    openModel: model,
  };
};

export default connect(mapStateToProps, null)(Main);
