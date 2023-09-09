import Head from 'next/head'
import Post from '../containers/Post/Post'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

export default function Home() {
   return (
      <>
         <Head>
            <title>Movie and series blog</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className='container'>
            <Header/>
            <div className='posts'>
               <Post/>
               <Post/>
               <Post/>
               <Post/>
            </div>
            <Footer/>
         </main>
      </>
   )
}
