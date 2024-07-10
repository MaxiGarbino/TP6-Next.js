import styles from './index.module.css';

import Link from 'next/link';

export default function quienes() {
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
    <div className={styles.contenedor}>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <p className={styles.cardTitle}>Raian Kim</p>
          <p>Veterinario</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardTitle}>Raian</p>
          <p>Soy un veterinario especializado en perros. Experiencia de mas de 15 años</p>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <p className={styles.cardTitle}>Maxi Garbarino</p>
          <p>Asistente</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardTitle}>Maxi</p>
          <p>Veterinario en aprendizaje</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
