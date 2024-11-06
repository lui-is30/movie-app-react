import { MovieType } from "../types/movieTypes"

export const getMovies=()=>{
    const movieMock:MovieType[]=[
        {
          id:1,
          title:'primo',
          description:'desc1',
        },
        {
          id:2,
          title:'secondo',
          description:'desc2',
        },
        {
          id:3,
          title:'terzo',
          description:'desc3',
        }
      ]
      return movieMock;
}