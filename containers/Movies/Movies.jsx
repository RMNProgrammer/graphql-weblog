import Movie from '../Movie/Movie'
import { useQuery } from '@apollo/client'
import MOVIES_QUERY from './Movies.query'

const Movies = () => {
   const { loading, error, data } = useQuery(MOVIES_QUERY)
   return (
      <div className='movies'>
         { loading && <div className='center blue'>Loading...</div> }
         { error && <div className='center red'>An error occurred</div> }
         <div>
            { data && data.allFilms && data.allFilms.films && data.allFilms.films.map((movie,index) => (
               <Movie key={index} movie={movie}/>
            ))}
         </div>
      </div>
   )
}

export default Movies 
