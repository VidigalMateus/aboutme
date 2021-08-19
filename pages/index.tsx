import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="This page is about me Vidigal Mateus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div>
       <h1>Está pagina é sobre mim Vidigal Mateus</h1>
     </div>
    </div>
  )
}

export default Home
