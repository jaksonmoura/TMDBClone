import './App.css'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import Movie from './components/Movie'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/movie/:id" element={<Movie/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
