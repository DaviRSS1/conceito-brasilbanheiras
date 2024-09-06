import React from "react";
import Banner from "./images/banner.jpg";
import styles from "./Banner.module.css";
import { GoDotFill } from "react-icons/go";

function Header() {
  return (
    <div className={styles.banners}>
      <img src={Banner} alt="banner" />
      <div className={styles.dots}>
        <GoDotFill color="#000" />
        <GoDotFill />
        <GoDotFill />
        <GoDotFill />
        <GoDotFill />
      </div>
    </div>
  );
}

export default Header;
