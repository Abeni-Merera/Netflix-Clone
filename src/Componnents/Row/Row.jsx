import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../axios";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";
// import { MdChevronRight, MdChevronLeft } from "react-icons/md";

// console.log(movieTrailer);
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, headerRow, NavId, sliderId }) {
  const [movies, setMovies] = useState([]); //  Deconstracting // => useState always return 2 values "initial state(movies)" and "Updated value(setMovies)"
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results)
      setMovies(request.data.results);
      // return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleOnclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      MovieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const searchParams = new URLSearchParams(new URL(url).search);
          // URLSearchParams.get() => Returns the first value associated with the given search parameter.
          setTrailerUrl(searchParams.get("v"));

          //   Means =>
          // var url = new URL('https://example.com?foo=1&bar=2');
          // var params = new URLSearchParams(url.search);
        })
        .catch((err) => console.log(err));
    }
  };

  // // Slider click section
  // // // slide Right
  //   const slideRight = () => {
  //     const slider = document.getElementById(sliderId);
  //     slider.scrollLeft = slider.scrollLeft + 600;
  //   };
  // // // slide left
  //   const slideLeft = () => {
  //     const slider = document.getElementById(sliderId);
  //     slider.scrollLeft = slider.scrollLeft - 600;
  //   };

  // AutoPlay variable
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // console.log(movies)
  return (
    <div className="row">
      <h1 id={NavId}>{title}</h1>
      <div className="row_posters">
        {/* <div className="">
          <MdChevronLeft onClick={slideLeft} size={40}/>
        </div> */}

        <div className="row_posters">
          {movies?.map((movie, i) => (
            <img
              key={i}
              onClick={() => handleOnclick(movie)}
              className={`row_poster ${headerRow && "row_posterLarge"}`}
              src={`${base_url}${
                headerRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {/* <div className="">
          <MdChevronRight onClick={slideRight} size={40}/>
        </div> */}
      </div>
      <div style={{ padding: "5px"}}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
  );
}

export default Row;
