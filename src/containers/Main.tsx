import React from 'react';

import '../assets/global.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import ContactPage from './pages/contact/Contact';
import MapPage from './pages/map/Map';

const MainPage = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default MainPage;
