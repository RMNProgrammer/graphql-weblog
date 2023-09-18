import Head from 'next/head'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from '../containers/Movies/Movies'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import MovieModal from '../containers/MovieModal/MovieModal'

const Home = () => {
   const [showMovieModal,setShowMovieModal] = useState(false)

   const handleToggleMovieModal = () => (
      setShowMovieModal(!showMovieModal)
   )

   return (
      <>
         <Head>
            <title>Movie and series blog</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className='container'>
            <Header/>
            <div className='center'>
               <Button onClick={handleToggleMovieModal} variant="outline-primary">Add Movie</Button>
               <MovieModal 
                  show={showMovieModal} 
                  handleClose={handleToggleMovieModal} 
               />
            </div>
            <Movies/>
            <Footer/>
         </main>
      </>
   )
}

export default Home
