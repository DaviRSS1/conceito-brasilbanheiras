import HeaderLogin from "../../Components/HeaderLogin";
import Login from "../../Components/Login";
import styles from "./PaginaLogin.module.css";

function PaginaLogin() {
  return (
    <>
      <HeaderLogin />
      <div className={styles.body}>
        <Login />
      </div>
    </>
  );
}

export default PaginaLogin;
