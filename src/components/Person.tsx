import { PersonType } from "../types/personTypes";
import "../style/Person.css"

type PersonProps={
    person:PersonType,
};

export const Person=({person}:PersonProps)=>{
    return(
        <div>
            <div className="person">
                <h1>{person.name}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} />
            </div>
        </div>
    );
}