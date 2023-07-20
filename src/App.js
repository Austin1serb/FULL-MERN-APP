import React from 'react';
import Main from './views/Main';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
function App() {
  return (

    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route  ></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}
export default App;
