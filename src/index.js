import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App></App>
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

