import { gql } from '@apollo/client'

const MOVIES_QUERY = gql`
   query Movies {
      allFilms {
         films {
            title
            director
            producers
            openingCrawl
            characterConnection {
               characters {
                  name
               }
            }
         }
      }
   }
`

export default MOVIES_QUERY
