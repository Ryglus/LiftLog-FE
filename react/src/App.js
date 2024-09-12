import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ThemeProvider} from './contexts/ThemeContext';

import NoPage from "./pages/NoPage";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout/>}>
              <Route index element={<HomePage/>}/>
                <Route path="/exercises" element={<HomePage/>}/>
                <Route path="/progress" element={<HomePage/>}/>
                <Route path="/workouts" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>


            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}


export default App;