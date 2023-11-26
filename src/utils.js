import movieTrailer from "movie-trailer";

export function getTrailerURL (movie, trailerURL, setTrailerURL, setMsg) {
    setMsg("")
    if (trailerURL) setTrailerURL('');
    else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then(url=> {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerURL(urlParams.get('v'))
        })
        .catch(err => {
            console.log(`Failed to fetch the Trailer ${err}`)
            setMsg("Preview unavialble. Play Next Trailer!")
        })
    }
}

export function truncate(str, n){
    return str?.length > n ? str.substr(0,n-1) + "...": str;
}
