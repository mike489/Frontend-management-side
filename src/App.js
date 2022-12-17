import React from 'react';
import SignIn from './pages/sign-in/sign-in';
import HomePage from './pages/home-page/home-page';
import {Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
      <Routes>
        <Route element={<HomePage />} path="/home-page" exact={true} />
        <Route element={<SignIn />} path="/" exact={true} />
      </Routes>
  );
}

export default App;
