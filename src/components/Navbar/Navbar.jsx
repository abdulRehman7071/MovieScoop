import "./Navbar.css";
import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../../features/toggleNav/index";
import { FindMovie } from "../../App";
const Navbar = () => {
  const showNav = useSelector((state) => state.toggleNav.value);
  const navRef = useRef(null);
  let mobile = false;
  const navigate = useNavigate();
  let {
    searchMovies,
    setSearchMovies,
    setSearching,
    setSearchResults,
    searchResults,
    setInprocess
  } = useContext(FindMovie);
  const dispatch = useDispatch();

  if (window.innerWidth < 660) {
    mobile = true;
  }
  const handleChange = (e) => {
    setSearching(true);
    setSearchMovies(e.target.value);
    console.log(searchMovies);
  };

  const navLinks = [
    { data: "Popular", url: "/" },
    { data: "Top Rated", url: "/top-rated" },
    { data: "Upcoming", url: "/upcoming" }
  ];
  // console.log();
  const hideNavbar = () => {
    dispatch(hide());
    navRef.current.style.display = "none";
  };
  const showNavbar = () => {
    dispatch(show());
    navRef.current.style.display = "block";
  };
  const searchResult = async () => {
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchMovies}&page=1`;
    const req = await fetch(url);
    const res = await req.json();
    const data = await res.results;
    setSearchResults(data);
    setInprocess(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
    searchResult();
  };
  return (
    <header>
      <div className="ham__container">
        {showNav ? (
          <i className="fa-solid fa-xmark" onClick={() => hideNavbar()}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={() => showNavbar()}></i>
        )}
      </div>
      <div className="header__logo">Movies Scoop</div>
      <div className="header__nav">
        <ul ref={navRef}>
          {navLinks.map((link, i) => (
            <Link key={i} to={link.url}>
              {mobile ? (
                <li onClick={() => hideNavbar()}>{link.data}</li>
              ) : (
                <li>{link.data}</li>
              )}
            </Link>
          ))}
        </ul>
        <form>
          <input
            type="text"
            placeholder="Search Movies"
            onChange={(e) => handleChange(e)}
          />
          <Link to="/search">
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </Link>
        </form>
      </div>
    </header>
  );
};
export default Navbar;
