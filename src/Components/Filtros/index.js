import styles from "./Filtros.module.css";
import { IoIosArrowForward, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

function Filtros({ isOpen, toggleFiltro }) {
  return (
    <>
      <div
        className={`${styles.filtroOverlay} ${isOpen ? styles.open : ""}`}
        onClick={toggleFiltro}
      ></div>
      <div className={`${styles.filtro} ${isOpen ? styles.open : ""}`}>
        <div className={styles.filtroHeader}>
          <p>
            <GiSettingsKnobs /> Filtrar por:
          </p>
          <p className={styles.limpar}>LIMPAR FILTROS</p>
        </div>
        <ul className={styles.filtroLinks}>
          <li className={styles.aberto}>
            <p className={styles.titulo}>
              Mais Vendidos <IoIosArrowForward />
            </p>
            <ul>
              <li>Banheiras</li>
              <li>Spas</li>
              <li>Ofuros</li>
            </ul>
          </li>
          <li className={styles.aberto}>
            <p className={styles.titulo}>
              Preço <IoIosArrowForward />{" "}
            </p>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                min="299"
                max="23737"
                value="299"
                className={styles.slider}
                id="priceRange"
              />
              <div className={styles.sliderLabels}>
                <span>R$ 299,90</span>
                <span>R$ 23.737,37</span>
              </div>
            </div>
          </li>
          <li className={styles.aberto}>
            <p className={styles.titulo}>
              Lugares <IoIosArrowForward />
            </p>
            <div>
              <form>
                <p>
                  <input type="checkbox" /> 1 Lugar
                </p>

                <p>
                  <input type="checkbox" /> 2 Lugares
                </p>

                <p>
                  <input type="checkbox" /> 3 Lugares
                </p>
                <p>
                  <input type="checkbox" /> 4 Lugares
                </p>
                <p>
                  <input type="checkbox" /> 5 Lugares
                </p>
              </form>
            </div>
          </li>
          <li>
            <p>Configuração</p> <IoIosArrowDown />
          </li>
          <li>
            <p>Forma</p>
            <IoIosArrowDown />
          </li>
          <li className={styles.aberto}>
            <p className={styles.titulo}>
              Comprimento <IoIosArrowForward />
            </p>
            <div>
              <form>
                <p>
                  <input type="checkbox" /> 1,10 - 1,20
                </p>

                <p>
                  <input type="checkbox" /> 1,20 - 1,30
                </p>

                <p>
                  <input type="checkbox" /> 1,30 - 1,40
                </p>
                <p>
                  <input type="checkbox" /> 1,40 - 1,50
                </p>
                <p>
                  <input type="checkbox" /> 1,50 - 1,60
                </p>
              </form>
            </div>
          </li>
          <li>
            <p>Largura</p>
            <IoIosArrowDown />
          </li>
          <li>
            <p>Profundidade</p>
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
      {isOpen && (
        <button className={styles.toggleButton} onClick={toggleFiltro}>
          <IoMdClose size={"1.5rem"} />
        </button>
      )}
    </>
  );
}

export default Filtros;
