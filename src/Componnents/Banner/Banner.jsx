import React, { useState, useEffect } from "react";
import requests from "../../request";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestArry = await axios.get(requests.fetchNetflixOriginals);
      const returnedArry = requestArry?.data.results;
      setMovie(
        returnedArry[
          Math.floor(Math.random() * requestArry.data.results.length)
        ]
      );
      return requestArry;
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header id="Home">
      <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path} ")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
    </header>
  );
}

export default Banner;
