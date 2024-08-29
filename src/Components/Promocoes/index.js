import styles from "./Promocoes.module.css";
import banner from "./images/banner-home-produtos-olinda-mobile-pais-brasil.jpg";

function Promocoes() {
  return (
    <div className={styles.promocoes}>
      <img src={banner} alt="" />
      <img src={banner} alt="" />
      <img src={banner} alt="" />
    </div>
  );
}

export default Promocoes;
