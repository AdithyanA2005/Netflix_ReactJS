import React from "react";
import requests from "../requests";
import Banner from "../components/Banner";
import Row from "../components/Row";

function Home() {
  return (
    <>
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaryMovie} />
    </>
  );
}

export default Home;
