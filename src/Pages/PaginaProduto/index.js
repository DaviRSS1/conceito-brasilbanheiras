import DescricaoProduto from "../../Components/DescricaoProduto";
import HeaderProtudos from "../../Components/HeaderProdutos";
import InfoProdutos from "../../Components/InfoProdutos";
import styles from "./PaginaProduto.module.css";

function PaginaProduto() {
  return (
    <div className={styles.body}>
      <HeaderProtudos />
      <InfoProdutos />
      <DescricaoProduto />
    </div>
  );
}

export default PaginaProduto;
