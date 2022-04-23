import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import axios from "../axios";
import requests from "../requests";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      return await axios.get(fetchUrl).then((response) => {
        setMovies(response.data.results);
      });
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowWrap>
      <RowTitle>{title}</RowTitle>
      <RowContainer>
        {movies.map((movie) => {
          if (
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)
          ) {
            return (
              <RowPoster
                src={`${requests.imageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                isLarge={isLargeRow}
                alt={movie.name}
                key={movie.id}
              />
            );
          }
        })}
      </RowContainer>
    </RowWrap>
  );
}

export default Row;

const RowWrap = styledComponents.div`
  margin: 20px;
`;
const RowTitle = styledComponents.div`
  color: white;
  padding-top: 20px;
  text-transform: uppercase;
`;
const RowContainer = styledComponents.div`
  display: flex;
  gap: 10px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-top: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const RowPoster = styledComponents.img`
  max-height: 100px;
  object-fit: contain;
  transition: transform 450ms;
  width: 100%;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }

  ${(props) =>
    props.isLarge &&
    `max-height: 250px;
      &:hover {
        transform: scale(1.09);
        opacity: 1;
      }
  `});
`;
