import "./Single.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../../requests";
import Cast from "../../components/Cast/Cast";
const Single = () => {
  const [singleMovie, setSingleMovie] = useState([]);
  const [cast, setCast] = useState([]);
  let { id } = useParams();
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    fetchData(Api_key, id);
  }, []);

  const fetchData = async (Api_key, id) => {
    const fetchAll = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
    );
    const res = await fetchAll.json();
    const data = await res;

    // Cast
    const fetchCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US
`
    );
    const castRes = await fetchCast.json();
    const castData = await castRes.cast;

    if (data || castData) {
      setSingleMovie(data);
      setCast(castData);
    }
  };

  return (
    <>
      <div className="single__container">
        <div className="details__wrapper">
          <div className="single__details">
            <div className="poster__container">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" + singleMovie.poster_path
                }
              />{" "}
            </div>
            <div>
              <h2>{singleMovie.original_title}</h2>
              <p>
                Rating : <span>{singleMovie.vote_average}&#9733;</span>
              </p>
              <p>
                Runtime : <span>{singleMovie.runtime}</span> mins
              </p>
              <p>
                Realse Date : <span>{singleMovie.release_date}</span>
              </p>
            </div>
          </div>
          <h2>overview</h2>
          <p>{singleMovie.overview}</p>
        </div>
        <div className="single__cover">
          <img
            src={"https://image.tmdb.org/t/p/w500" + singleMovie.backdrop_path}
          />
        </div>
      </div>
      <h3 className="cast__heading">Cast</h3>
      <div className="cast__container">
        {cast.map((cast, i) => (
          <div className="cast__details" key={i}>
            {cast.profile_path && (
              <Cast
                url={cast.profile_path}
                name={cast.name}
                character={cast.character}
                id={i}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default Single;
