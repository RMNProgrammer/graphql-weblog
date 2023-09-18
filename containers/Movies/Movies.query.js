import { gql } from '@apollo/client'

const MOVIES_QUERY = gql`
   query Movies {
      allFilms {
         films {
            title
            director
         }
      }
   }
`

export default MOVIES_QUERY
