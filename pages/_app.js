import '../config/styles.css'
import client from '../utils/clientGraphQL'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
   return (
      <ApolloProvider client={client}>
         <Component {...pageProps} />
      </ApolloProvider>
  )
}
