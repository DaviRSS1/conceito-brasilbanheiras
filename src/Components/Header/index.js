import React from "react";
import styles from "./Header.module.css";
import LogoMobile from "./images/logo-branca-mobile.png";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogos}>
        <FiAlignJustify color="white" size={"1.5rem"} />
        <img src={LogoMobile} alt="logo mobile branca" />
        <div>
          <FaUser color="white" size={"1.2rem"} />
          <BsCart2 color="white" size={"1.3rem"} />
        </div>
      </div>
      <div class={styles.headerPesquisa}>
        <input type="text" placeholder="Pesquise aqui..." />
        <IoIosSearch class={styles.iconePesquisa} />
      </div>
    </header>
  );
}

export default Header;
