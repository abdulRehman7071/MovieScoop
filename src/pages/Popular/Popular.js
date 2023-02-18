import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import SearchMovie from "../../components/SearchMovie/SerachMovie";
import requests from "../../requests";
import "./Popular.css";

const Popular = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [allMovies, setAllMovies] = useState([]);
  const [searching, setSearching] = useState(true);
  const fetchData = async () => {
    const fetchAll = await fetch(requests.fetcAllmovies);
    const res = await fetchAll.json();
    const data = await res.results;
    if (data.length > 1) {
      setAllMovies(data);
    }
  };

  return (
    <>
      {searching ? (
        <SearchMovie />
      ) : (
        <div className="popular__container">
          {allMovies.map((item, i) => (
            <Cards
              key={i}
              url={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              id={item.id}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Popular;
