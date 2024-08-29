import Categorias from "../Categorias";
import Certificados from "../Certificados";
import React from "react";
import styles from "./PaginaInicial.module.css";
import Card from "../Card";
import Whatsapp from "../Whatsapp";
import Banner from "../Banner";
import Promocoes from "../Promocoes";

function PaginaInicial() {
  return (
    <>
      <Banner />
      <body className={styles.body}>
        <Certificados />
        <Categorias />
        <Card>Mais vendidos</Card>
        <Promocoes />
        <Card>Frete promocional</Card>
        <Whatsapp />
        <Card>Outlet</Card>
      </body>
    </>
  );
}

export default PaginaInicial;
