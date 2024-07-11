"use client";
import Image from "next/image";
import Titulo from "../components/Titulo/Titulo.js";
import Formulario from "../components/Formulario/Formulario.js";
import Cita from "../components/Cita/Cita.js";
import styles from "../page.module.css";
import React, { useState, useEffect } from "react";

import Link from "next/link";

export default function Reservas() {
  const initialCitas = [
    {
      Id: 1,
      Mascota: "Nina",
      Dueño: "Martin",
      Fecha: "2021-08-05",
      Hora: "8:20",
      Sintomas: "Le duele la pierna",
    },
    {
      Id: 2,
      Mascota: "Sifon",
      Dueño: "Flecha",
      Fecha: "2023-08-05",
      Hora: "09:24",
      Sintomas: "Duerme mucho",
    },
    {
      Id: 3,
      Mascota: "Floki",
      Dueño: "Ari",
      Fecha: "2023-08-05",
      Hora: "16:15",
      Sintomas: "No está comiendo",
    },
  ];
  const [citas, setCitas] = useState(() => {
    const citasLocalStorage = localStorage.getItem("citas");
    return citasLocalStorage ? JSON.parse(citasLocalStorage) : initialCitas;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("citas", JSON.stringify(citas));
    }
  }, [citas]);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/quienes" className={styles.link}>
              Quiénes Somos
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/reservas" className={styles.link}>
              Reservas
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contacto" className={styles.link}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <>
          {<Titulo />}
          <div class="container">
            <div class="row">
              <Formulario
                className="form"
                citas={citas}
                setCitas={setCitas}
              ></Formulario>
              <Cita className="citas" citas={citas} setCitas={setCitas}></Cita>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
