import styles from './index.module.css';

import Link from 'next/link';

export default function quienes() {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link href="../page.js">Home</Link>
          </li>
          <li>
            <Link href="/">Quien somos</Link>
          </li>
          <li>
            <Link href="../reservas">Reservas</Link>
          </li>
          <li>
            <Link href="../contacto">Contacto</Link>
          </li>
          
        </ul>
      </nav>
    <div className={styles.contenedor}>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <p className={styles.cardTitle}>Raian Kim</p>
          <p>Programador</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardTitle}>BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <p className={styles.cardTitle}>Maxi Garbarino</p>
          <p>Programador</p>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardTitle}>BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
