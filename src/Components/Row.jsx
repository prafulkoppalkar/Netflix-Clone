import { useEffect, useState, forwardRef} from "react";
import { imgBaseURL, youtubeOptions } from "../constants";
import fetch from "../APIs/axios"
import '../styles/row.css';
import YouTube from "react-youtube"
import { getTrailerURL } from "../utils";

const Row = forwardRef((props, ref) => {
    const {reqURL, title, isLargeRow} = props;
    const [list, setList] = useState([]);
    const [trailerURL, setTrailerURL] = useState("")
    const [msg, setMsg] = useState("")

    useEffect(()=>{
        function getList (url) {
            fetch.get(url)
            .then(json=> {
                setList(json.data.results)
            })
            .catch(err => 
                console.log(`${title} API failed ${err}`)
            )
        }
        getList(reqURL)
    },[reqURL,title])
    return(
        <div className="row" ref={ref}>
            <h2>{title}</h2>
            <div className="row_container" >
                {list.map((item)=> (
                    <img key={item.id} 
                        onClick={()=>getTrailerURL(item,trailerURL ,setTrailerURL, setMsg)}
                        className={`row_item ${isLargeRow ? "large_row_item": ""}`} 
                        src={`${imgBaseURL}${isLargeRow?item.poster_path:item.backdrop_path}`} 
                        alt={item.original_title}
                    />
                ))}
            </div>
            {msg && <div style={{color:"lightgray", padding:"2px"}}>{msg}</div>}
            {trailerURL && <YouTube videoId={trailerURL} opts={youtubeOptions}/>}
        </div>
    )
})

export default Row;