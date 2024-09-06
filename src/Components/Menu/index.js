import styles from "./Menu.module.css";
import LogoMobile from "../Header/images/logo-branca-mobile.png";
import { FaUser } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { IoHelp } from "react-icons/io5";
import { IoMdHappy } from "react-icons/io";
import { Link } from "react-router-dom";

function Menu({ isOpen, toggleMenu }) {
  // Função para fechar o menu ao clicar em um Link
  const handleLinkClick = () => {
    toggleMenu(); // Fechar o menu
  };

  return (
    <>
      <div
        className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuHeader}>
          <div className={styles.menuLogin}>
            <p>Sua conta</p>
            <FaUser size={"1.2rem"} />
          </div>
          <div>
            <h3>Bem Vindo a</h3>
            <img src={LogoMobile} alt="" />
          </div>
        </div>
        <ul className={styles.menuLinks}>
          <Link to={"/"} onClick={handleLinkClick}>
            <li>
              <p>Página Inicial</p> <MdHome />
            </li>
          </Link>
          <div className={styles.aberto}>
            <Link to={"/categorias"} onClick={handleLinkClick}>
              <div>
                <p>Mais Vendidos</p> <IoIosArrowForward />
              </div>
              <ul>
                <li>Banheiras</li>
                <li>Spas</li>
                <li>Ofuros</li>
              </ul>
            </Link>
          </div>
          <li>
            <p>Banheiras</p> <IoIosArrowDown />
          </li>
          <li>
            <p>Spas</p> <IoIosArrowDown />
          </li>
          <li>
            <p>Ofurôs</p> <IoIosArrowDown />
          </li>
          <li>
            <p>Acessórios</p>
          </li>
          <li>
            <p>Outlet</p>
          </li>
          <li>
            <p>Frete Promocional</p>
          </li>
          <li>
            <p>Dia dos Pais</p>
          </li>
          <li>
            <p>Ajuda</p> <IoHelp />
          </li>
          <li>
            <p>Quem Somos</p> <IoMdHappy />
          </li>
        </ul>
      </div>
      {isOpen && (
        <button className={styles.toggleButton} onClick={toggleMenu}>
          <IoMdClose size={"1.5rem"} />
        </button>
      )}
    </>
  );
}

export default Menu;
