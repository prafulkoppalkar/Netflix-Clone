const API_KEY = "553896f9f74baa8004c35d871e09905a"

const urls = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies : `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/tv?api_key=${API_KEY}&with_genres=37`,
    fetchRomanceMovies : `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default urls;