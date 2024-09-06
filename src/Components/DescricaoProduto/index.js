import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import Card from "../Card";
import styles from "./DescricaoProduto.module.css";
import iagem from "./img/dadas.png";
import { GoQuestion } from "react-icons/go";
import OpiniaoProduto from "../OpiniaoProduto";

function DescricaoProduto() {
  return (
    <div className={styles.descricao}>
      <div className={styles.tabela}>
        <h2>Detalhes Técnicos</h2>
        <table>
          <tr>
            <td>Jatos Direcionáveis</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Mini Jatos (Nas Costas)</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Par de Alças</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Encostos de Cabeça (Travesseiros)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Entrada de água</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Saída de água</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Sucção</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Entrada de ar (Arejador)</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Tubulação de água e ar</td>
            <td>Sim</td>
          </tr>
          <tr>
            <td>MotoBomba de 1 cv auto-drenante</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>Acrílico</td>
          </tr>
        </table>
        <div className={styles.imagens}>
          <img
            src="https://m.media-amazon.com/images/S/aplus-media/sota/bacc69ea-3d24-40e3-9798-36bf5414c8af.__PT0_V1___.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/S/aplus-media/sota/f8a66278-4078-4530-8680-c4d9e33bbf9e.__PT0_V1___.jpg"
            alt=""
          />
          <img src={iagem} alt="" />
        </div>
      </div>

      <Card>Produtos Relacionados</Card>
      <div className={styles.descricaoCurta}>
        <h2>Descrição</h2>
        <p>
          SPA REDONDO MONTE CASTELO COMPLETO COM HIDRO EM ACRÍLICO
          <br />
          <br /> Transforme seu espaço em um ambiente de luxo com nossos spas de
          hidromassagem para 5 pessoas. Ideais para spas, hotéis ou áreas de
          lazer residenciais, esses spas combinam design sofisticado e
          tecnologia de ponta para oferecer uma experiência de bem-estar
          incomparável. Equipados com múltiplos jatos estrategicamente
          posicionados, proporcionam massagens terapêuticas que aliviam o
          estresse e revitalizam o corpo. Com um design ergonômico que acomoda
          confortavelmente até 5 pessoas, cada sessão de hidromassagem se torna
          um momento de puro relaxamento e conexão. Eleve o padrão do seu espaço
          e ofereça aos seus clientes ou convidados uma experiência de
          rejuvenescimento e conforto incomparável com nossos spas de
          hidromassagem. <br />
          <br />
          ------------------------------ <br />
          <br />
          BENEFÍCIOS DA HIDROMASSAGEM <br />
          <br />
          Ter uma hidromassagem em casa traz diversos benefícios, como:
          <br />
          <br /> - Relaxamento muscular profundo
        </p>
        <p className={styles.arrow}>
          Ver descrição completa
          <IoIosArrowDown size={"1.5rem"} color="#115f31" />
        </p>
      </div>
      <div className={styles.perguntas}>
        <h2>Perguntas e respostas</h2>
        <div className={styles.container}>
          <h3>Qual informação você precisa?</h3>
          <div className={styles.botoes}>
            <button className={styles.adicionar}>Custo e prazo de envio</button>
            <button className={styles.adicionar}>Meios de pagamento</button>
            <button className={styles.adicionar}>Garantia</button>
          </div>
        </div>
        <div className={styles.container}>
          <h3>Busque o que você quer saber</h3>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Digite uma pergunta ou palavra-chave..."
              className={styles.input}
            />
            <button className={styles.botaoPesquisa}>
              <IoIosSearch className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.container}>
          <h3>Últimas perguntas feitas</h3>
          <div className={styles.perguntaContainer}>
            <p>QUANTOS kilos ele suporta em cada asento?</p>
            <div className={styles.pergunta}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="9 10 5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-corner-down-left"
                style={{ transform: "rotate(180deg)" }}
              >
                <path d="M9 10h5v5" />
              </svg>
              <p>O sofá suporta até 100kg por lugar.</p>
            </div>
          </div>
          <p className={styles.arrow}>
            Ver mais perguntas
            <IoIosArrowDown size={"1.5rem"} color="#115f31" />
          </p>
          <button className={styles.adicionar}>
            <GoQuestion size={"1.2rem"} color="#115f31" />
            <p>Como pergunto ao vendedor?</p>
          </button>
        </div>
      </div>
      <OpiniaoProduto />
      <Card>Quem viu este produto também comprou</Card>
    </div>
  );
}

export default DescricaoProduto;
