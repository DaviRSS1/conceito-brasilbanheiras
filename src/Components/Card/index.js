import styles from "./Card.module.css";
import { FaArrowDownLong } from "react-icons/fa6";

function Card({ children }) {
  return (
    <div className={styles.cardContainer}>
      <h2>{children}</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-retangular-paragua_u_hierro-completa-com-hidro-revisao1_1.jpg"
            alt=""
          />
          <h3>Spa Quadrado Harmonia COMPLETO com hidro em acrílico</h3>
          <div className={styles.preco}>
            <p className={styles.precoCortado}>R$15.987,50</p>
            <p className={styles.desconto}>
              30%
              <FaArrowDownLong size={"10px"} />
            </p>
            <p>R$11.900,00</p>
          </div>
          <div className={styles.parcelas}>
            <p>
              em até <strong>10x</strong> de R$999,00
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-retangular-paragua_u_hierro-completa-com-hidro-revisao1_1.jpg"
            alt=""
          />
          <h3>Spa Quadrado Harmonia COMPLETO com hidro em acrílico</h3>
          <div className={styles.preco}>
            <p className={styles.precoCortado}>R$15.987,50</p>
            <p className={styles.desconto}>
              30%
              <FaArrowDownLong size={"10px"} />
            </p>
            <p>R$11.900,00</p>
          </div>
          <div className={styles.parcelas}>
            <p>
              em até <strong>10x</strong> de R$999,00
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-retangular-paragua_u_hierro-completa-com-hidro-revisao1_1.jpg"
            alt=""
          />
          <h3>Spa Quadrado Harmonia COMPLETO com hidro em acrílico</h3>
          <div className={styles.preco}>
            <p className={styles.precoCortado}>R$15.987,50</p>
            <p className={styles.desconto}>
              30%
              <FaArrowDownLong size={"10px"} />
            </p>
            <p>R$11.900,00</p>
          </div>
          <div className={styles.parcelas}>
            <p>
              em até <strong>10x</strong> de R$999,00
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-retangular-paragua_u_hierro-completa-com-hidro-revisao1_1.jpg"
            alt=""
          />
          <h3>Spa Quadrado Harmonia COMPLETO com hidro em acrílico</h3>
          <div className={styles.preco}>
            <p className={styles.precoCortado}>R$15.987,50</p>
            <p className={styles.desconto}>
              30%
              <FaArrowDownLong size={"10px"} />
            </p>
            <p>R$11.900,00</p>
          </div>
          <div className={styles.parcelas}>
            <p>
              em até <strong>10x</strong> de R$999,00
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://www.brasilbanheiras.com.br//media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/banheira-retangular-paragua_u_hierro-completa-com-hidro-revisao1_1.jpg"
            alt=""
          />
          <h3>Spa Quadrado Harmonia COMPLETO com hidro em acrílico</h3>
          <div className={styles.preco}>
            <p className={styles.precoCortado}>R$15.987,50</p>
            <p className={styles.desconto}>
              30%
              <FaArrowDownLong size={"10px"} />
            </p>
            <p>R$11.900,00</p>
          </div>
          <div className={styles.parcelas}>
            <p>
              em até <strong>10x</strong> de R$999,00
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h4>Ver mais...</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
