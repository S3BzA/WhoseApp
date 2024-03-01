import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./pages/js/LoginSignup";
import Home from './pages/js/Home';
import Explore from "./pages/js/Explore";
import Notifications from './pages/js/Notifications';
import Messages from './pages/js/Messages';
import Lists from './pages/js/Lists';
import Bookmarks from './pages/js/Bookmarks';
import Communities from './pages/js/Communities';
import Profile from './pages/js/Profile';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* index specifies default page when app is launched */}
          <Route index element={<LoginSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} /> 
          <Route path="/notifications" element={<Notifications />} /> 
          <Route path="/messages" element={<Messages />} /> 
          <Route path="/lists" element={<Lists />} /> 
          <Route path="/bookmarks" element={<Bookmarks />} /> 
          <Route path="/communities" element={<Communities />} /> 
          {/* Premium? */}
          <Route path="/profile" element={<Profile />} /> 
           {/* More? */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
