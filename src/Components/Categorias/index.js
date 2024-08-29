import React from "react";
import styles from "./Categorias.module.css";

function Categorias() {
  return (
    <ul className={styles.categorias}>
      <li>
        <img
          src="https://www.brasilbanheiras.com.br//media/wysiwyg/banner-banheiras-quadrado-2.jpg"
          alt=""
        />
        <p>Banheiras</p>
      </li>
      <li>
        <img
          src="https://www.brasilbanheiras.com.br//media/wysiwyg/banner-spas-quadrado-2.jpg"
          alt=""
        />
        <p>Spas</p>
      </li>
      <li>
        <img
          src="https://www.brasilbanheiras.com.br//media/wysiwyg/banner-ofuro-quadrado-2.jpg"
          alt=""
        />
        <p>Ofurôs</p>
      </li>
    </ul>
  );
}

export default Categorias;
