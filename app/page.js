import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from 'next/link';

import Titulo from './components/Titulo/Titulo';

export default function Home() {
  return (
    <>
    <Head>
    </Head>
    <Titulo></Titulo>
    <main className={styles.main}>
      
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/quienes">Quien somos</Link>
          </li>
          <li>
            <Link href="./reservas">Reservas</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          
        </ul>
      </nav>
    </main>
    </>
  );
}