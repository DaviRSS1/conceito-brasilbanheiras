import HeaderCategorias from "../../Components/HeaderCategorias";
import Produtos from "../../Components/Produtos";
import styles from "./Categorias.module.css";

function PaginaCategoria() {
  return (
    <div className={styles.pagina}>
      <HeaderCategorias />
      <Produtos />
    </div>
  );
}

export default PaginaCategoria;
