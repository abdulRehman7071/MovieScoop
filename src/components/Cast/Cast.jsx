import "./Cast.css";
const Cast = ({ url, name, character, id }) => {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w500" + url} alt="" />
      <h4>{name}</h4>
      <h4>{character}</h4>
    </div>
  );
};
export default Cast;
