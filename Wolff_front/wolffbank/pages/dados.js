import Head from "next/head";
import Dados from '../components/Usuario/Dados'
import Sidebar from '../components/Usuario/Sidebar'

export default function Home(){
    return(
        <div>
        <Head>
        <title>Wolff's Bank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lobologo.png" />
      </Head>

      <Dados/>

      <Sidebar/>
      </div>
    )
}