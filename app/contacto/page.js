import Image from "next/image";
import styles from "./index.module.css";
import Head from "next/head";
import Link from 'next/link';

export default function contacto() {
  return (
    <>
    
   
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
    
    
    
    
    <main className={styles.principal}>
                    <div className={styles.contenedorFormulario}>
                        <h2>Formulario de Contacto</h2>
                        <form className={styles.formulario}>
                            <label className={styles.etiqueta} htmlFor="name">Nombre:</label>
                            <input className={styles.entrada} type="text" id="name" name="name" required />

                            <label className={styles.etiqueta} htmlFor="email">Correo Electrónico:</label>
                            <input className={styles.entrada} type="email" id="email" name="email" required />

                            <label className={styles.etiqueta} htmlFor="message">Mensaje:</label>
                            <textarea className={styles.textarea} id="message" name="message" required></textarea>

                            <button className={styles.boton} type="submit">Enviar</button>
                        </form>
                    </div>
                   
                
          
        </main>
        
        
    </>
    
  );
}



