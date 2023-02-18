import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ url, title, rating, id }) => {
  return (
    <Link to={"/single/" + id}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500${url}`} />

        <h3>{title}</h3>
        <p>
          Rating: <span>{rating}</span>
        </p>
      </div>
    </Link>
  );
};

export default Cards;
