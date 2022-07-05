import './App.css';
import './index.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import FavoriteCats from "./pages/favoriteCats"
import Header from "./components/header";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favoritecats" element={<FavoriteCats />} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
