import { LuDot } from "react-icons/lu";
import styles from "./HeaderProtudos.module.css";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function HeaderProtudos() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <p className={styles.headerCaminho}>
          início <LuDot /> mais vendidos <LuDot /> Banheira Dupla Olinda
          COMPLETA com hidro em acrílico
        </p>
      </div>
      <div className={styles.subHeader}>
        <p>352 vendidos</p>
        <div className={styles.estrelas}>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>(35)</p>
        </div>
      </div>
      <div className={styles.titulo}>
        <h1>Banheira Dupla Olinda COMPLETA com hidro em acrílico</h1>
      </div>
      <div className={styles.foto}>
        <img
          src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-dupla-lisa-olinda_hierro-completa-com-hidro-em-acr_lico_4.jpg"
          alt=""
        />
        <div>
          <GoDotFill color="#115f31" />
          <GoDotFill />
          <GoDotFill />
          <GoDotFill />
          <GoDotFill />
        </div>
      </div>
    </div>
  );
}

export default HeaderProtudos;
