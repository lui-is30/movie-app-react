

import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes'

function App() {
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
  return (
    <div>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>
      <h2>ciao</h2>
      {movieMock.map((movie)=>{
          return <MovieCard movie={movie}/>}
      )}
    </div>
  )
}

export default App
