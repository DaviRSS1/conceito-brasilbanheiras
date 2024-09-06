import React, { useState } from "react";
import styles from "./Header.module.css";
import LogoMobile from "./images/logo-branca-mobile.png";
import { FiAlignJustify } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Menu from "../Menu";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <header className={styles.header}>
        <div className={styles.headerLogos}>
          <FiAlignJustify color="white" size={"1.5rem"} onClick={toggleMenu} />
          <Link to={"/"}>
            <img src={LogoMobile} alt="logo mobile branca" />
          </Link>
          <div>
            <Link to={"/login"}>
              <FaUser color="white" size={"1.2rem"} className={styles.user}/>
            </Link>
            <BsCart2 color="white" size={"1.3rem"} />
          </div>
        </div>
        <div className={styles.headerPesquisa}>
          <input type="text" placeholder="Pesquise aqui..." />
          <IoIosSearch className={styles.iconePesquisa} />
        </div>
      </header>
    </>
  );
}

export default Header;
