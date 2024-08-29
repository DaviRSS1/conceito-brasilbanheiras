import React from "react";
import Banner from "./images/banner.jpg";
import styles from "./Banner.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <div className={styles.banners}>
      <IoIosArrowBack className={`${styles.arrow} ${styles.arrowLeft}`} />
      <img src={Banner} alt="banner" />
      <IoIosArrowForward className={`${styles.arrow} ${styles.arrowRight}`} />
    </div>
  );
}

export default Header;
