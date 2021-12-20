import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import SingleArtistView from './components/SingleArtistView';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="guest" element={<HomePage />} />
          <Route path="singleArtist" element={<SingleArtistView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
