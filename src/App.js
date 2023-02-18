import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular/Popular";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import Single from "./pages/Single/Single";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
