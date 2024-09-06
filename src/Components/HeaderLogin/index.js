import { Link } from "react-router-dom";
import styles from "./HeaderLogin.module.css";
import logo from "./images/logo-branca-mobile.png";

function HeaderLogin() {
  return (
    <header className={styles.headerLogin}>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </header>
  );
}

export default HeaderLogin;
