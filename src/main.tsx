import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. BrowserRouter 대신 HashRouter를 불러옵니다.
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './app/App';
import Resume from './Resume/Resume'; 
import CoverLetterPage from './Resume/CoverLetter'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/coverletter" element={<CoverLetterPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);