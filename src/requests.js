const Api_key = "c45a857c193f6302f2b5061c3b85e743";
const requests = {
  fetcAllmovies: `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`,
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
};
export default requests;
