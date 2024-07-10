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
      <div>
        <h1>Bienvenido!!</h1>
        <h3 className={styles.inde}>Nuestra plataforma está diseñada para facilitar la vida de los dueños de mascotas y los profesionales del cuidado canino. <br></br>
         Con Cita para Perros, puedes reservar citas para peluquería, entrenamientos, visitas veterinarias y más, todo desde la comodidad de tu hogar.<br></br> Nos dedicamos a asegurar que cada perro reciba la atención y el cuidado que necesita, cuando lo necesita. Únete a nuestra comunidad y descubre lo fácil y conveniente que es mantener a tu mejor amigo feliz y saludable. ¡Reserva tu cita hoy y dale a tu perro el trato que se merece!

</h3>
      </div>
    
    </main>
    </>
  );
}