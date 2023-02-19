import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import { useState, createContext, Provider } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular/Popular";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import Single from "./pages/Single/Single";
const FindMovie = createContext();
export default function App() {
  const [searchMovies, setSearchMovies] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [inProcess, setInprocess] = useState(true);

  return (
    <FindMovie.Provider
      value={{
        searchMovies,
        setSearchMovies,
        searching,
        setSearching,
        searchResults,
        setSearchResults,
        inProcess,
        setInprocess
      }}
    >
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
    </FindMovie.Provider>
  );
}
export { FindMovie };
