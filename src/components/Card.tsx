import { MovieCardProps } from "../types/movieTypes";
import { PersonCardProps } from "../types/personTypes";
import { TvCardProps } from "../types/tvTypes";
import "../style/CardStyle.css";


export const Card=({props}:MovieCardProps|PersonCardProps|TvCardProps)=>{
    let titleProps!:string;
    let pathProps!:string;

    switch(props.media_type){
        case "movie":
            if("title" in props){
                titleProps=props.title;
                pathProps=props.poster_path;
            }
            break;
        case "tv":
            if("name" in props && "poster_path" in props){
                titleProps=props.name;
                pathProps=props.poster_path;
            }
            break;
        case "person":
            if("name" in props && "profile_path" in props){
                titleProps=props.name;
                pathProps=props.profile_path;
            }
            break;
    }

    return(
        <div className="single">
            <h1>{titleProps}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${pathProps}`}/>
        </div>
    );
}