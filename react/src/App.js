import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NoPage from "./pages/NoPage";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Route>
        <Route path="/profile" element={<HomeLayout/>}>
          <Route index element={<ProfilePage/>}/>
          <Route path="/profile/settings" element={<ProfilePage/>}/>
        </Route>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;