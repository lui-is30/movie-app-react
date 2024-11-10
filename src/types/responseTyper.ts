import { MovieType } from "./movieTypes";
import { PersonType } from "./personTypes";

export type ResponseTrendingType={
    page:number,
    results:MovieType[],
    total_pages:number,
    total_results:number,
};

export type ResponseTrendingPeople={
    page:number,
    results:PersonType[],
    total_pages:number,
    total_results:number,
}