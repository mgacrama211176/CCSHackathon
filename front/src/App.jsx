import React from "react";
import Home from "../pages/Home";
import GetStarted from '../pages/GetStarted';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import Notice from "../pages/Notice";
import Dashboard from "../pages/Dashboard";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
