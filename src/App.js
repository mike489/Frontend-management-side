import React from 'react';
import SignIn from './pages/sign-in/sign-in';
import {Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
      <Routes>
        <Route element={<SignIn />} path="/" exact={true} />
      </Routes>
  );
}

export default App;
