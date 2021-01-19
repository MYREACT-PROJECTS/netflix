import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css'
import movieTrailer from 'movie-trailer'

const baseUrl ="https://image.tmdb.org/t/p/original/"


export default function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]= useState()
    const [trailerUrl,setTrailerUrl]= useState()


   useEffect(() => {
    async function fetchData () {
        const request = await axios.get (fetchUrl);
        setMovies(request.data.results)

        return request;
    }



    fetchData();
   // console.table(movies)

     
   }, [fetchUrl])
   console.log(movies)

   const opts = {
       height :"390",
       width: "100%",
       playerVars :{
           //https://developers.google.com/youtube/player_parameters
           autoplay:1,

       }
   };
    const handleClick = (movie)=> {
       // console.log('xx')

       if (trailerUrl){ 
           setTrailerUrl("")

       }else { 
               // setTrailerUrl('iL0IEmTTjYU')
                movieTrailer(movie.title || "")  
               .then( (url)=>{
                const urlParams = new URLSearchParams( new URL(url).search ) 
                
                 setTrailerUrl(urlParams.get('v')); 


                }).catch((error)=> console.log(error));
    }

       



    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div  className="row__posters">
            {        movies?.map(movie =>(
                    <img 
                   key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={ `row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt ={movie.name} />
              
                   ))}
            </div>
           {trailerUrl && <YouTube videoId = {trailerUrl} opts= {opts} />}
        </div>
    )
}
//'https://api.themoviedb.org/3/discover/tv?api_key=469724948a1ee8985adb14b7e923d1dc & with_networks=213
//https://api.themoviedb.org/3/movie/550?api_key=469724948a1ee8985adb14b7e923d1dc&with_networks=213