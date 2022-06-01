import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import ContactPage from './pages/contact/Contact';

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
