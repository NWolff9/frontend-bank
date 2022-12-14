import Head from 'next/head'
import Hero from '../components/Vitrine/Hero'
import Navbar from '../components/Vitrine/Navbar'
import Conteudo from '../components/Vitrine/Conteudo'
import Marketing from '../components/Vitrine/Marketing'
import Footer from '../components/Vitrine/Footer'

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
