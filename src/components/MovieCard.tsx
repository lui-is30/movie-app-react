import { MovieType } from "../types/movieTypes";

export const MovieCard=(props:MovieType)=>{
    
    const movieMock:MovieType={
        id:1,
        title:'Inception',
    };

    if(movieMock.title===''){
        return <h1>*** Errore il movie è corrotto ***</h1>
    }

    return(
        <div>
            <h1>{props.id}</h1>
            <p>{ props.title }</p>
        </div>
    );
}