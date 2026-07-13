import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './app/App';
import Resume from './Resume/Resume'; 
import CoverLetterPage from './Resume/CoverLetter'; 



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 💡 basename을 설정하면 하위 경로를 자동으로 처리해줍니다 */}
    <BrowserRouter basename="/3d_object_portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/coverletter" element={<CoverLetterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);