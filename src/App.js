import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element = {<HomeScreen />}>
          </Route>
        </Routes>
    </Router>
    </div>

  );
}

export default App;
