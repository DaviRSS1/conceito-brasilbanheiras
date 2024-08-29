import styles from "./Whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className={styles.whatsapp}>
      <p>Dúvidas? Converse com um especialista!</p>
      <FaWhatsapp />
    </div>
  );
}

export default Whatsapp;
