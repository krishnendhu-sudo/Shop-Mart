import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ShopContextProvider>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </ShopContextProvider>
  </Router>
);
