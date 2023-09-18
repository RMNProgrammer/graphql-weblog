import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
   uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
   /*
      Also tested:
         uri: 'https://flyby-router-demo.herokuapp.com/',
   */
   cache: new InMemoryCache(),
});

export default client