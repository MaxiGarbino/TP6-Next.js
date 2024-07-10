import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from 'next/link';
import Titulo from './components/Titulo/Titulo';

export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
    </Head>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/quienes" className={styles.link}>Quiénes Somos</Link>
        </li>
        <li className={styles.li}>
          <Link href="/reservas" className={styles.link}>Reservas</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contacto" className={styles.link}>Contacto</Link>
        </li>
      </ul>
    </nav>
    <Titulo></Titulo>
    <main className={styles.main}>
      
    
    </main>
    </>
  );
}