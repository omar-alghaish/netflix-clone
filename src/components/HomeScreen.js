import React from "react";
import "../style/homescreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../Request";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}
export default HomeScreen;
