const API_KEY = "42cdcd3d3e05c642cb3c1fe3ca638aed";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
