

import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes'

function App() {
  const movieMock:MovieType[]=[
    {
      id:1,
      title:'primo',
    },
    {
      id:2,
      title:'secondo',
    },
    {
      id:3,
      title:'terzo',
    }
  ]
  return (
    <div>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>
      <h2>ciao</h2>
      {movieMock.map((movie)=>{
          return <MovieCard id={movie.id} title={movie.title}/>}
      )}
    </div>
  )
}

export default App
