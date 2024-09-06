import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [selectedOption, setSelectedOption] = useState("criar");

  return (
    <div className={styles.login}>
      <h1>Olá! Para comprar, acesse a sua conta</h1>
      <div className={styles.inputs}>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              name="authOption"
              value="criar"
              checked={selectedOption === "criar"}
              onChange={() => setSelectedOption("criar")}
            />
            Criar conta
          </label>
        </div>
        {selectedOption === "criar" && (
          <>
            <div>
              <label>Nome e sobrenome</label>
              <input type="text" />
            </div>
            <div>
              <label>Número de celular ou e-mail</label>
              <input type="text" />
            </div>
            <div>
              <label>Crie uma senha</label>
              <input type="password" />
            </div>
            <div className={styles.radio}>
              <label>
                <input type="checkbox" />
                Mostrar senha
              </label>
            </div>
            <button className={styles.comprar}>Continuar</button>
            <p className={styles.termos}>
              Ao continuar, você concorda com as <span>Condições de Uso</span>{" "}
              da BrasilBanheiras. Por favor verifique os{" "}
              <span>Termos e Condições</span> e o{" "}
              <span>Termos de Privacidade</span>
            </p>
          </>
        )}
      </div>
      <div className={styles.inputs}>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              name="authOption"
              value="entrar"
              checked={selectedOption === "entrar"}
              onChange={() => setSelectedOption("entrar")}
            />
            Entrar
          </label>
        </div>
        {selectedOption === "entrar" && (
          <>
            <div>
              <label>Número de celular ou e-mail</label>
              <input type="text" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" />
            </div>
            <div className={styles.radio}>
              <label>
                <input type="checkbox" />
                Mostrar senha
              </label>
            </div>
            <button className={styles.comprar}>Continuar</button>
            <p className={styles.termos}>
              Ao continuar, você concorda com as <span>Condições de Uso</span>{" "}
              da BrasilBanheiras. Por favor verifique os{" "}
              <span>Termos e Condições</span> e o{" "}
              <span>Termos de Privacidade</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
