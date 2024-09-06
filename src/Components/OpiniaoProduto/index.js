import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./OpiniaoProduto.module.css";
import img from "./img/5-Prova Social Banheira1.png";

const OpiniaoProduto = () => {
  return (
    <div className={styles.opinioesContainer}>
      <h2 className={styles.title}>Opiniões do produto</h2>
      <div className={styles.ratingContainer}>
        <div className={styles.averageRating}>
          <span className={styles.averageText}>4.6</span>
          <div className={styles.stars}>
            <FaStar className={styles.star} size={"1.7rem"} />
            <FaStar className={styles.star} size={"1.7rem"} />
            <FaStar className={styles.star} size={"1.7rem"} />
            <FaStar className={styles.star} size={"1.7rem"} />
            <FaStarHalfAlt className={styles.star} size={"1.7rem"} />
          </div>
          <span className={styles.reviewCount}>30 avaliações</span>
        </div>
        <div className={styles.breakdown}>
          <div className={styles.breakdownRow}>
            <input
              type="range"
              min="0"
              max="5"
              value="4"
              readOnly
              className={styles.bar}
              style={{ "--value": 4 }} // Atualize o valor aqui dinamicamente
            />
            <div>
              <span>5</span>
              <FaStar className={styles.star} />
            </div>
          </div>
          <div className={styles.breakdownRow}>
            <input
              type="range"
              min="0"
              max="5"
              value="2"
              readOnly
              className={styles.bar}
              style={{ "--value": 1.2 }} // Atualize o valor aqui dinamicamente
            />
            <div>
              <span>4</span>
              <FaStar className={styles.star} />
            </div>
          </div>
          <div className={styles.breakdownRow}>
            <input
              type="range"
              min="0"
              max="5"
              value="3"
              readOnly
              className={styles.bar}
              style={{ "--value": 0.1 }} // Atualize o valor aqui dinamicamente
            />
            <div>
              <span>3</span>
              <FaStar className={styles.star} />
            </div>
          </div>
          <div className={styles.breakdownRow}>
            <input
              type="range"
              min="0"
              max="5"
              value="2"
              readOnly
              className={styles.bar}
              style={{ "--value": 0.2 }} // Atualize o valor aqui dinamicamente
            />
            <div>
              <span>2</span>
              <FaStar className={styles.star} />
            </div>
          </div>
          <div className={styles.breakdownRow}>
            <input
              type="range"
              min="0"
              max="5"
              value="1"
              readOnly
              className={styles.bar}
              style={{ "--value": 0.5 }} // Atualize o valor aqui dinamicamente
            />
            <div>
              <span>1</span>
              <FaStar className={styles.star} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.characteristics}>
        <div className={styles.characteristic}>
          <span>Confortável</span>
          <div className={styles.stars}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStarHalfAlt className={styles.star} />
          </div>
        </div>
        <div className={styles.characteristic}>
          <span>Qualidade dos materiais</span>
          <div className={styles.stars}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStarHalfAlt className={styles.star} />
          </div>
        </div>
        <div className={styles.characteristic}>
          <span>Custo-benefício</span>
          <div className={styles.stars}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStarHalfAlt className={styles.star} />
          </div>
        </div>
      </div>
      <p className={styles.moreLink}>Mostrar todas as características</p>
      <h2>Principais opiniões</h2>
      <div className={styles.opinioes}>
        <div className={styles.opinioess}>
          <div className={styles.headerOpinioes}>
            <div>
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
            </div>
            <div>
              <p>18/05/2024</p>
            </div>
          </div>
          <div className={styles.opiniao}>
            <div>
              <h3>Excelente</h3>
              <img src={img} alt="" />
            </div>
            <div>
              <p>
                O produto ultrapassou minhas expectativas, realmente é muito
                bonito, grande e confortável. Amei minha compra. Me sinto
                realizada!.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.opinioess}>
          <div className={styles.headerOpinioes}>
            <div>
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
            </div>
            <div>
              <p>18/05/2024</p>
            </div>
          </div>
          <div className={styles.opiniao}>
            <div>
              <h3>Excelente</h3>
            </div>
            <div>
              <p>
                O produto ultrapassou minhas expectativas, realmente é muito
                bonito, grande e confortável. Amei minha compra. Me sinto
                realizada!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpiniaoProduto;
