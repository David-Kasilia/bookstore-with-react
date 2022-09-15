import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
