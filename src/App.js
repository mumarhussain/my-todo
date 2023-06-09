import './App.css';
import React from 'react'
import Todo from './components/Todo';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path='todo' element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
