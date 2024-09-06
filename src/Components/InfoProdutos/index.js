import { FaArrowDownLong } from "react-icons/fa6";
import styles from "./InfoProdutos.module.css";
import { Link } from "react-router-dom";

function InfoProdutos() {
  return (
    <div className={styles.infos}>
      <div className={styles.opcoes}>
        <div>
          <p>Tamanho: 1,40X1,20X0,40</p>
          <ul>
            <li>1,40X1,20X0,40</li>
            <li>1,50X1,20X0,40</li>
            <li>1,60X1,20X0,40</li>
            <li>1,70X1,20X0,40</li>
          </ul>
        </div>
        <div>
          <p>Voltagem: 127v</p>
          <ul>
            <li>127v</li>
            <li>220v</li>
          </ul>
        </div>
        <div>
          <p>Cor: Branco</p>
          <ul>
            <li>Branco</li>
            <li>Preto Brilho</li>
            <li>Vermelho</li>
          </ul>
        </div>
        <div className={styles.opcoesAdicionais}>
          <p>Opções adicionais</p>
          <ul>
            <li>
              Motor Syllent <strong>R$ 700</strong>
            </li>
            <li className={styles.opcaoExtra}>
              Motor Syllent <strong>R$ 700</strong>
            </li>
            <li>
              Motor Syllent <strong>R$ 700</strong>
            </li>
            <li>
              Motor Syllent <strong>R$ 700</strong>
            </li>
            <li>
              Motor Syllent <strong>R$ 700</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.preco}>
        <p className={styles.precoCortado}>R$15.987,50</p>
        <p className={styles.desconto}>
          30%
          <FaArrowDownLong size={"10px"} />
        </p>
        <p>R$11.900,00</p>
        <div className={styles.parcelas}>
          <p>
            em até <strong>10x</strong> de R$999,00
          </p>
        </div>
      </div>
      <div className={styles.botoesCompra}>
        <Link to={"/login"}>
          <button className={styles.comprar}>Comprar agora</button>
        </Link>
        <button className={styles.adicionar}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default InfoProdutos;
