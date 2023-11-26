import { useEffect, useState } from "react";
import fetch from "../APIs/axios";
import urls from "../APIs/resquests";
import { imgBaseURL } from "../constants";
import { getTrailerURL, truncate } from "../utils";
import YouTube from "react-youtube"
import { youtubeOptions } from "../constants";
import '../styles/banner.css'

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerURL, setTrailerURL] = useState("")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    function getmovies() {
      fetch.get(urls.fetchNetflixOriginals)
        .then(
          (json) =>
            setMovie(json.data.results[
              Math.floor(Math.random() * json.data.results.length - 1)
            ])
        )
        .catch(err => 
            console.log(`Banner API failed ${err}`)
        )
    }
    getmovies();
  }, []);

  return (
    <>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        padding: "7rem 3rem 7rem 3rem",
        backgroundImage: `url("${imgBaseURL}${movie?.backdrop_path}")`,
        backgroundPosition:'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={()=> getTrailerURL(movie, trailerURL, setTrailerURL, setMsg)}>{trailerURL?"Pause":"Play"}</button>
          <button className="banner_button">My List</button>
        </div>
        {msg && <div style={{color:"lightgray", padding:"2px"}}>{msg}</div>}
        <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
        </h1>
      </div>
      
    </header>
    <div className="banner_fadeBottom"></div>
    {trailerURL && <YouTube opts={youtubeOptions} videoId={trailerURL}/>}
    </>
  );
}
