import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';

const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter basename={""}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route element={<NotFound/>} status={404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
