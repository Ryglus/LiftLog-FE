import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ThemeProvider} from './contexts/ThemeContext';

import NoPage from "./pages/NoPage";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {AccountProvider} from "./contexts/AccountContext";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
      <ThemeProvider>
          <AccountProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomeLayout/>}>
                  <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Route>
                <Route path="*" element={<NoPage/>}/>
              </Routes>
            </BrowserRouter>
          </AccountProvider>
      </ThemeProvider>
  );
}


export default App;