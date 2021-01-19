import React,{useState,useEffect} from 'react'
import requests from './request'
import axios from './axios'
import './Banner.css'

export default function Banner() {
    const [movie,setMovie]= useState()


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            console.log()//
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length -1) ]
                    )
                    return request;

        }
      
        fetchData();
    }, [])
    console.log(movie)//
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"....":str
    }


    return (
        <header className= "banner"
        style={{
            background:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}> 
        <div className='banner__contents'>
            <h1 className=""banner__title>{movie?.title|| movie?.name || movie?.original_name  }</h1>
            <div className="banner__buttons">
                <button className= "banner__button">PLAY</button>
                <button className= "banner__button">My LIST</button>
            </div>
            <h1 className="banner__description">{truncate(movie?.overview,150 )}</h1>
        </div>
        <div className="banner__fadeBottom"></div>
        </header>
    )
}
