import Image from "next/image";
import styles from "../page.module.css";

import Link from 'next/link';

export default function Reservas() {
  return (
    <>
    <main className={styles.main}>
      
      <nav>
        <ul>
          <li>
            <Link href="../page.js">Home</Link>
          </li>
          <li>
            <Link href="../quienes-somos">Quien somos</Link>
          </li>
          <li>
            <Link href="/">Reservas</Link>
          </li>
          <li>
            <Link href="../contacto">Contacto</Link>
          </li>
          
        </ul>
      </nav>
    </main>
    </>
  );
}