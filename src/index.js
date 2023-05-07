import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignPage from "./pages/Design";
import DevelopmentPage from "./pages/Development";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Home></Home>
    {/* <BrowserRouter>
      <Routes> */}
        {/* <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="development" element={<DevelopmentPage />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

