import Head from 'next/head'
import Movies from '../containers/Movies/Movies'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

const Home = () => {
   return (
      <>
         <Head>
            <title>Movie and series blog</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className='container'>
            <Header/>
            <Movies/>
            <Footer/>
         </main>
      </>
   )
}

export default Home
