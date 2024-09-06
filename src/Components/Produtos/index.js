import { FaArrowDownLong } from "react-icons/fa6";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";

function Produtos() {
  return (
    <div className={styles.produtosContainer}>
      <div>
        <Link to={"/produto"}>
          <div className={styles.produtos}>
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
        </Link>
        <Link to={"/produto"}>
          <div className={styles.produtos}>
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
        </Link>
      </div>
      <div>
        <div className={styles.produtos}>
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
        <div className={styles.produtos}>
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
      </div>
      <div>
        <div className={styles.produtos}>
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
        <div className={styles.produtos}>
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
      </div>
      <div>
        <div className={styles.produtos}>
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
        <div className={styles.produtos}>
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
      </div>
      <div className="loader loader--style3" title="2">
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
          style={{ enableBackground: "new 0 0 50 50" }}
          xmlSpace="preserve"
        >
          <path
            fill="#115f31"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Produtos;
