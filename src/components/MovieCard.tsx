
import { useState } from "react";
import { MovieType } from "../types/movieTypes";
import "../style/MovieCard.css";

type MovieCardProps={
    movie:MovieType;
};

export const MovieCard=({movie}:MovieCardProps)=>{

    const [clickCount, setClickCount]=useState(0);
    const handleClick=(message:string)=>{
        console.log(`cliccato ${message}`);
        setClickCount(clickCount+1);
    }


    return(
        <div onClick={()=>(handleClick("movie.title"))}>
            
             <div className="movies">
              <h1>{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
             </div>
            
        </div>
        
    );
}