import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Conteudo from '../components/Conteudo'
import Marketing from '../components/Marketing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wolff's Bank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lobologo.png" />
      </Head>

      <Navbar/>
      <Hero/>
      <Conteudo/>
      <Marketing/>
      <Footer/>
      
    </div>
  )
}
