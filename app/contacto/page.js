import Image from "next/image";
import styles from "../page.module.css";
import Head from "next/head";
import Link from 'next/link';

export default function contacto() {
  return (
    <>
    <Head>
    </Head>
    <main className={styles.main}>
      
      <nav>
        <ul>
          <li>
            <Link href="../page.js">Home</Link>
          </li>
          <li>
            <Link href="../quienes">Quienes somos</Link>
          </li>
          <li>
            <Link href="../reservas">Reservas</Link>
          </li>
          <li>
            <Link href="/">Contacto</Link>
          </li>
          
        </ul>
      </nav>

      <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <h2 className={styles.cardTitle}>Formulario de Contacto</h2>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Nombre:</label>
            <input className={styles.input} type="text" id="name" name="name" required />

            <label className={styles.label} htmlFor="email">Correo Electrónico:</label>
            <input className={styles.input} type="email" id="email" name="email" required />

            <label className={styles.label} htmlFor="message">Mensaje:</label>
            <textarea className={styles.textarea} id="message" name="message" required></textarea>

            <button className={styles.button} type="submit">Enviar</button>
          </form>
        </div>
        <div className={styles.cardBack}>
          <h2 className={styles.cardTitle}>¡Gracias!</h2>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      </div>
    </div>
    </main>
    </>
    
  );
}



