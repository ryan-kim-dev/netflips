// * 요청 URI 변수화시키기.
const requests = {
  fetchNowPlaying: `/movie/now_playing`,
  fetchNetflixOriginals: `/discover/tv/with_networks=213`,
  fetchWeekTrending: `/trending/all/week`,
  fetchTopRatedMovies: `/movie/top_rated`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export default requests;
