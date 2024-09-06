import Categorias from "../../Components/Categorias";
import Certificados from "../../Components/Certificados";
import React from "react";
import styles from "./PaginaInicial.module.css";
import Card from "../../Components/Card";
import Whatsapp from "../../Components/Whatsapp";
import Banner from "../../Components/Banner";
import Promocoes from "../../Components/Promocoes";

function PaginaInicial() {
  return (
    <>
      <Banner />
      <div className={styles.body}>
        <Certificados />
        <Categorias />
        <Card>Mais vendidos</Card>
        <Promocoes />
        <Card>Frete promocional</Card>
        <Whatsapp />
        <Card>Outlet</Card>
      </div>
    </>
  );
}

export default PaginaInicial;
