
import { useState } from "react";
import { MovieType } from "../types/movieTypes";
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
            <h1>{movie.id}</h1>
            <p>{movie.title}</p>
            <p>{movie.media_type}</p>
            <p>cliccato {clickCount} volte</p>
        </div>
    );
}