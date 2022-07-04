import './App.css';
import './index.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import FavoriteCats from "./pages/favoriteCats"

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favoriteCats" element={<FavoriteCats />} />
       </Routes>
      </BrowserRouter>
  );
}

export default App;
