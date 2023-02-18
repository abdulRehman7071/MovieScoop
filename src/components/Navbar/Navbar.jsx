import "./Navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { show, hide } from "../../features/toggleNav/index";
const Navbar = () => {
  const showNav = useSelector((state) => state.toggleNav.value);
  const navRef = useRef(null);

  // console.log(showNav);
  const dispatch = useDispatch();

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
  return (
    <header>
      <div className="ham__container">
        {showNav ? (
          <i className="fa-solid fa-xmark" onClick={() => hideNavbar()}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={() => showNavbar()}></i>
        )}
      </div>
      <div className="header__logo">MovieDb</div>
      <div className="header__nav">
        <ul ref={navRef}>
          {navLinks.map((link, i) => (
            <Link key={i} to={link.url} onClick={() => hideNavbar()}>
              <li>{link.data}</li>
            </Link>
          ))}
        </ul>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};
export default Navbar;
