import Head from "next/head";
import Inicio from '../components/Usuario/Inicio'
import Cartoes from '../components/Usuario/Cartoes'

export default function Home(){
    return(
        <div>
        <Head>
        <title>Wolff's Bank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lobologo.png" />
      </Head>

      <Inicio/>

      <Cartoes/>
      
     

      </div>
    )
}