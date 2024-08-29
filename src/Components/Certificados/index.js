import React from "react";
import styles from "./Certificados.module.css";

function Certificados() {
  return (
    <div className={styles.certificados}>
      <img
        src="https://magento-192909-2948362.cloudwaysapps.com/media/icone-inmetro.png"
        alt=""
      />
      <img
        src="https://magento-192909-2948362.cloudwaysapps.com/media/icone-parcelamento.png"
        alt=""
      />
      <img
        src="https://magento-192909-2948362.cloudwaysapps.com/media/icone-frete-gratis.png"
        alt=""
      />
    </div>
  );
}

export default Certificados;
