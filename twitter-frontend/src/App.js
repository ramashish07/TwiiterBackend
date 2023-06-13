import { Route, Routes,Link } from "react-router-dom"
import React from 'react';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
    </>
  );
}

export default App;
