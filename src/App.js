import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="guest" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
