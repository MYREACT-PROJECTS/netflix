import './App.css';
import requests from './request'
import Row from './Row';
import Banner from './Banner'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
  <Row  title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
  <Row  title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow  />
  <Row  title="TOP RATED" fetchUrl={requests.fetchTopRated} />
  <Row  title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
  <Row  title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
  <Row  title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
  <Row  title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
  <Row  title="DOCUMENTARIES MOVIES" fetchUrl={requests.fetchDocumentaries} />
  
    </div>
  );
}

export default App;
