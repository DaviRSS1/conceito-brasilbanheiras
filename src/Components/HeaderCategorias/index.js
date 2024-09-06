import styles from "./HeaderCategorias.module.css";
import { LuDot } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";
import Filtros from "../Filtros";
import Select from "react-select";

const options = [
  {
    value: "most-searched",
    label: (
      <>
        <GoArrowSwitch
          style={{ transform: "rotate(90deg)", color: "#115f31" }}
        />{" "}
        Mais Procurados
      </>
    ),
  },
];

function HeaderCategorias() {
  const DropdownIndicator = () => null;
  const [isFiltroOpen, setIsFiltroOpen] = useState(false);

  const toggleFiltro = () => {
    setIsFiltroOpen(!isFiltroOpen);
  };

  return (
    <>
      <Filtros isOpen={isFiltroOpen} toggleFiltro={toggleFiltro} />
      <div className={styles.headerConteiner}>
        <div className={styles.header}>
          <p className={styles.headerCaminho}>
            início <LuDot /> mais vendidos
          </p>
          <h1>Mais Vendidos</h1>
          <p>
            Descubra as banheiras, spas e ofurôs mais vendidos, perfeitos para
            transformar seu espaço.
          </p>
        </div>
        <div className={styles.botoes}>
          <button onClick={toggleFiltro}>
            <p>
              <GiSettingsKnobs style={{ color: "#115f31" }} /> Filtros
            </p>
          </button>
          <Select
            className={styles.select}
            options={options}
            defaultValue={options[0]}
            components={{ DropdownIndicator }}
            isSearchable={false}
            unstyled
          />
        </div>
        <div>
          <p className={styles.produtos}>
            <strong>120</strong> Produtos
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderCategorias;
