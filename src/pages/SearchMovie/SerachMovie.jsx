import "./SearchMovies.css";
import { useContext, useEffect, useState } from "react";
import { FindMovie } from "../../App";
import Cards from "../../components/Cards/Cards";
const SearchMovie = () => {
  const { searchResults, inProcess } = useContext(FindMovie);
  console.log(searchResults);
  return (
    <>
      {" "}
      {inProcess ? (
        <div className="searching__container">
          <h2>Searching...</h2>
          <p>Press Search Button to find Movies</p>.
        </div>
      ) : (
        <div className="popular__container">
          {searchResults.map((result, i) => (
            <Cards
              url={result.poster_path}
              title={result.original_title}
              rating={result.vote_average}
              id={result.id}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default SearchMovie;
