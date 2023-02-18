import requests from "../../requests";
import { useEffect, useState } from "react";
import "./Upcoming.css";
import Cards from "../../components/Cards/Cards";
const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);
  const fetchData = async () => {
    const fetchAll = await fetch(requests.upcomingMovies);
    const res = await fetchAll.json();
    const data = await res.results;
    if (data.length > 1) {
      setUpcoming(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="upcoming__container popular__container">
      {upcoming.map((item, i) => (
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
export default Upcoming;
