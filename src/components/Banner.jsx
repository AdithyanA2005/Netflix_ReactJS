import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  const truncate = (string, count) => {
    return string?.length > count
      ? string.substr(0, count - 1) + " ..."
      : string;
  };

  useEffect(() => {
    async function fetchData() {
      return await axios.get(requests.fetchTrending).then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 20)]);
      });
    }
    fetchData();
  }, []);

  return (
    <BannerWrap
      bgImg={movie ? requests.imageBaseUrl + movie.backdrop_path : ""}
    >
      <BannerContainer>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My list</BannerButton>
        </BannerButtons>
        <BannerDiscription>{truncate(movie?.overview, 150)}</BannerDiscription>
      </BannerContainer>

      <BannerFade></BannerFade>
    </BannerWrap>
  );
}

export default Banner;

const BannerWrap = styledComponents.header`
  align-items: center;
  background-color: #000;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  color: white;
  display: flex;
  height: 28rem;
  object-fit: contain;
  position: relative;
`;
const BannerContainer = styledComponents.div`
  margin-left: 30px;
`;
const BannerTitle = styledComponents.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
const BannerDiscription = styledComponents.h2`
  width: inherit;
  font-size: 0.8rem;
  height: 80px;
  line-height: 1.3;
  max-width: 360px;
  padding-top: 1rem;
  width: 45rem;
`;
const BannerButtons = styledComponents.div`
  display: flex;
`;
const BannerButton = styledComponents.button`
  background-color: rgba(51, 51, 51, 0.5);
  border: none;
  border-radius: 0.2vw;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  outline: none;

  &:hover {
    background-color: #e6e6e6;
    color: #000;
    transition: all 0.2s;
  }
`;
const BannerFade = styledComponents.div`
  background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
  bottom:0;
  height: 7.4rem;
  position: absolute;
  width: 100%;
`;
