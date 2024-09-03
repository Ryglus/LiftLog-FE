import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ThemeProvider} from './contexts/ThemeContext';

import './styles/style.css';
import NoPage from "./pages/NoPage";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route index element={<HomePage/>}/>
            </Route>


            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}


export default App;