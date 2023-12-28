import React from 'react';
import Home from './components/Home';
import Writing from './components/Writing';
import TestingHub from './components/Testinghub';
import Portfolio from './components/Portfolio';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testinghub" element={<TestingHub />} />
        <Route path="/writing" element={<Writing />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
