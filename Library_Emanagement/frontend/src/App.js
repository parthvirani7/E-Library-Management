import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import AddBookPage from './pages/AddBookPage'; 
import BorrowBookPage from './pages/BorrowBookPage'; 
import ReturnBookPage from './pages/ReturnBookPage'; 

function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/borrow" element={<BorrowBookPage />} />
        <Route path="/return" element={<ReturnBookPage />} />
      </Routes>
    </div>
  );
}

export default App;
