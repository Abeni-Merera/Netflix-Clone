import React from "react";
import './App.css'
import requests from "./request";
import Row from "./Componnents/Row/Row";
import Banner from "./Componnents/Banner/Banner";
import Nav from "./Componnents/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <Row sliderId='1' NavId='Original-netflix' title='NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals}
     headerRow
     />
     <Row sliderId='2' NavId='Trending-now' title='Trending Now' fetchUrl = {requests.fetchTrending} />
     <Row sliderId='3' NavId='Top-rated' title='Top Rated' fetchUrl = {requests.fetchTopRatedMovies} />
     <Row sliderId='4' NavId='Action-movies' title='Action ' fetchUrl = {requests.fetchActionMovies} />
     <Row sliderId='5' NavId='Comedy-movie' title='Comedy ' fetchUrl = {requests.fetchComedyMovies} />
     <Row sliderId='6' NavId='Horror-movie' title='Horror ' fetchUrl = {requests.fetchHorrorMovies} />
     <Row sliderId='7' NavId='Romance-movie' title='Romance ' fetchUrl = {requests.fetchRomanceMovies} />
     <Row sliderId='8' NavId='Documentary-movie' title='Documentaries ' fetchUrl = {requests.fetchDocumentaries} />
     
     
    </div>
  );
}

export default App;
