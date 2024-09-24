import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NoPage from "./pages/NoPage";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import ProfilePage from "./pages/ProfilePage";
import AnalyticsPage from "./pages/AnalyticsPage";

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
          <Route path="/profile/:id" element={<ProfilePage/>}/>
        </Route>
        <Route path="/tracking" element={<HomeLayout/>}>
          <Route index element={<AnalyticsPage/>}/>
        </Route>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;