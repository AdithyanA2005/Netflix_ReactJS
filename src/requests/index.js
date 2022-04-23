const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const requests = {
  imageBaseUrl: "https://image.tmdb.org/t/p/original",

  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
