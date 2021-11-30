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
import Search from './components/Search'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
