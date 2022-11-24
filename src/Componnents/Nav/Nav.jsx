import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(() => true);
      } else handleShow(() => false);
      // Another way
      // return(window.scrollY > 100 ? handleShow(() => true) : handleShow(() => false))
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(() => true);
        } else handleShow(() => false);
      });
    };
  }, []);


  useEffect(() => {
    window
    .matchMedia("(min-width: 968px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="wrapper">
        <ul>
         {matches && ( <li>
            <Link className="cursorP" to="Home" duration={500} smooth={true}>
              Home
            </Link> 
            <Link
              className="cursorP"
              to="Original-netflix"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Netflix <br /> Original
            </Link>
            <Link
              className="cursorP"
              to="Trending-now"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Trending <br /> Now
            </Link>
            <Link
              className="cursorP"
              to="Top-rated"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Top <br /> Rated
            </Link>
            <Link
              className="cursorP"
              to="Action-movies"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Action{" "}
            </Link>
            <Link
              className="cursorP"
              to="Comedy-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Comedy{" "}
            </Link>
            <Link
              className="cursorP"
              to="Horror-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Horror{" "}
            </Link>
            <Link
              className="cursorP"
              to="Romance-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Romance{" "}
            </Link>
            <Link
              className="margR cursorP"
              to="Documentary-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Documentary
            </Link>
          </li>)}
          {!matches && (<li> <Link className="cursorP" to="Home" duration={500} smooth={true}>
              Home
            </Link>
            <Link
              className="cursorP"
              to="Original-netflix"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Netflix <br /> Original
            </Link>
            <Link
              className="cursorP"
              to="Top-rated"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Top Rated
            </Link>

            <Link
              className="cursorP"
              to="Comedy-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Comedy{" "}
            </Link>
            <Link
              className="cursorP"
              to="Romance-movie"
              duration={500}
              offset={-65}
              smooth={true}
            >
              Romance{" "}
            </Link>
            </li>)}
        </ul>
      </div>

      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="img"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar logo"
      />
    </div>
  );
}

export default Nav;
