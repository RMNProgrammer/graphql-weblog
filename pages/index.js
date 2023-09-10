import Head from 'next/head'
import { gql } from '@apollo/client'
import Post from '../containers/Post/Post'
import client from '../utils/clientGraphQL'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import React, { useState, useEffect } from 'react'

const Home = () => {
   const [films,setFilms] = useState([])
   const [loading,setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      client.query({
         query: gql`
            query Query {
               allFilms {
                  films {
                     title
                     created
                     director
                     producers
                     openingCrawl
                     characterConnection {
                        characters {
                           name
                           birthYear
                        }
                     }
                  }
               }
            }
         `,
      })
      .then((result) => {
         if( result && result.data && result.data.allFilms && result.data.allFilms.films ){
            setFilms(result.data.allFilms.films)
            setLoading(false)
         }
      });
   },[])

   return (
      <>
         <Head>
            <title>Movie and series blog</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className='container'>
            <Header/>
            <div className='posts'>
               { !loading && films && films.map((film,index) => (
                  <Post key={index} film={film}/>
               ))}
               { loading && <p className='loading'>Loading...</p> }
            </div>
            <Footer/>
         </main>
      </>
   )
}

export default Home
