import styles from "./Rodape.module.css";
import { FaPhone } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodapeLinks}>
        <ul>
          <h3>Informações Úteis</h3>
          <li>Quem somos</li>
          <li>Perguntas frequentes</li>
          <li>Como comprar</li>
          <li>Fale conosco</li>
          <li>Segurança</li>
        </ul>
        <ul>
          <h3>Atendimento</h3>
          <h4>Vendas e suporte</h4>
          <li>
            <FaWhatsapp size={"1.1rem"} />
            <p>(35)99999-9999</p>
          </li>
          <li>
            <FaPhone />
            <p>(35)99999-9999</p>
          </li>
          <h4>SAC / Rastreio</h4>
          <li>
            <FaWhatsapp size={"1.1rem"} />
            <p>(35)99999-9999</p>
          </li>
          <li>
            <FaPhone />
            <p>(35)99999-9999</p>
          </li>
        </ul>
      </div>
      <div className={styles.rodapeRedes}>
        <h3>Redes Sociais</h3>
        <div>
          <CiInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </div>
      <div className={styles.rodapeInfo}>
        <p>Termos e condições | Promoções | Termos de privacidade | Blog</p>
        <p className={styles.rodapeCnpj}>
          EROS DIGITAL Razão Social: Meireles e Nascimento LTDA CNPJ:
          07.028.315/0001-96 - IE: 0017860290081 Avenida Rei Pelé, 2861, Vila
          Rica, Três Corações-MG, CEP:37.418-010
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
