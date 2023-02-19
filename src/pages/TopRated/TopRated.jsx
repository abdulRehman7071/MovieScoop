import requests from "../../requests";
import { useEffect, useState, useContext } from "react";
import "./TopRated.css";
import Cards from "../../components/Cards/Cards";
import { FindMovie } from "../../App";
const TopRated = () => {
  const {} = useContext(FindMovie);
  const [topRated, setTopRated] = useState([]);
  const fetchData = async () => {
    const fetchAll = await fetch(requests.topRatedMovies);
    const res = await fetchAll.json();
    const data = await res.results;
    if (data.length > 1) {
      setTopRated(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="upcoming__container popular__container">
      {topRated.map((item, i) => (
        <Cards
          key={i}
          url={item.poster_path}
          title={item.title}
          rating={item.vote_average}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default TopRated;
