const API_KEY = "469724948a1ee8985adb14b7e923d1dc";
const requests ={
    fetchTrending :"/trending/all/week?api_key=469724948a1ee8985adb14b7e923d1dc&language=en-us",
    fetchNetflixOriginals:'/discover/tv?api_key=469724948a1ee8985adb14b7e923d1dc&with_networks=213',
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`

}
export default requests
