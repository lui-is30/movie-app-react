import { useEffect, useState } from "react";
import { MovieDetailType, MovieType } from "../types/movieTypes";
import { PersonDetailType, PersonType } from "../types/personTypes";
import { TVDetailType, TvTypes } from "../types/tvTypes";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle } from "./ui/dialog";
import { getMoviesDetails,getTvDetail,getPersonDetail } from "../api/getDetails";

type MovieDetailProps={
    isOpen:boolean;
    onClose:(value:boolean)=>void;
    prop:MovieType|TvTypes|PersonType;
}

export const MovieDetail=({isOpen,onClose,prop}:MovieDetailProps)=>{

    let titleProp!:string;
    let pathProp!:string;
    let description!:string;
    let homepage!:string;
    let budget!:number;

    const [propDetail,setPropDetail]=useState<MovieDetailType|TVDetailType|PersonDetailType>();

    useEffect(()=>{
        const fetchPropDetail=async()=>{
            let detail;
    switch(prop.media_type){
        case 'movie':
            if("title" in prop){
                detail= await getMoviesDetails(prop.id);
            }
            break;
        case 'tv':
            if("name" in prop && "poster_path" in prop){
                detail= await getTvDetail(prop.id);
            }
            break;
        case 'person':
            if("name" in prop && "profile_path" in prop){
                detail= await getPersonDetail(prop.id);
            }
            break;
        
    }
    setPropDetail(detail);
}
    fetchPropDetail();
},[]);

    if(propDetail){
        if("title" in propDetail){
           titleProp=propDetail.title;
           homepage = propDetail.homepage;
           description=propDetail.overview;
           budget=propDetail.budget;
        }
        if("name" in propDetail && "poster_path" in propDetail){
            titleProp=propDetail.name;
            homepage=propDetail.homepage;
            description=propDetail.overview;
        }
        if("name" in propDetail && "profile_path" in propDetail){
            titleProp=propDetail.name;
            homepage=propDetail.homepage;
        }
    }
    return(
        <>
        <DialogRoot motionPreset={"slide-in-right"} modal={true} size={"full"} lazyMount open={isOpen} onOpenChange={(e)=>onClose(e.open)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{titleProp}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>{description}</p>
                    <a href={homepage} target="_blank" rel="noopener noreferrer">homepage</a>
                        <p>{budget}</p>
                </DialogBody>
                <DialogFooter>Footer</DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
        </>
    );
}