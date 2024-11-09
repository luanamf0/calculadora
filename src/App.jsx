import { useState } from "react";
import { Botao } from "./components/botao/Botao";
import { ZeroBotao } from "./components/ZeroBotao/ZeroBotao";
import "./App.scss";

function App() {
  const [numUm, setNumUm] = useState("");
  const [simbolo, setSimbolo] = useState("");
  const [numDois, setNumDois] = useState("");

  function adcNumero(n) {
    let num = numUm + n;
    setNumUm(num);
  }

  function conta(sinal) {
    if (numUm != "" && numDois != "") {
      if (simbolo === "/") {
        setNumDois(parseFloat(numDois) / parseFloat(numUm));
      } else if (simbolo === "*") {
        setNumDois(parseFloat(numDois) * parseFloat(numUm));
      } else if (simbolo === "-") {
        setNumDois(parseFloat(numDois) - parseFloat(numUm));
      } else if (simbolo === "+") {
        setNumDois(parseFloat(numDois) + parseFloat(numUm));
      }
      setSimbolo(sinal);
      setNumUm("");
    } else {
      setSimbolo(sinal);
      setNumDois(numUm);
      setNumUm("");
    }
  }

  function resultado() {
    if (numUm != "" && numDois != "" && simbolo != "=") {
      if (simbolo === "/") {
        setNumUm(parseFloat(numDois) / parseFloat(numUm));
      } else if (simbolo === "*") {
        setNumUm(parseFloat(numDois) * parseFloat(numUm));
      } else if (simbolo === "-") {
        setNumUm(parseFloat(numDois) - parseFloat(numUm));
      } else if (simbolo === "+") {
        setNumUm(parseFloat(numDois) + parseFloat(numUm));
      }
      setNumDois("");
      setSimbolo("=");
    }
  }

  function limpar() {
    setNumUm("");
  }

  function limparTudo() {
    setNumUm("");
    setNumDois("");
    setSimbolo("");
  }

  function porcentagem() {
    let p = (parseFloat(numUm) / 100) * parseFloat(numDois);
    setNumUm(p);
  }

  function adcPonto() {
    if (numUm === "") {
      setNumUm("0.");
    } else if (!numUm.includes(".")) {
      let num = numUm + ".";
      setNumUm(num);
    }
  }

  return (
    <div className="content">
      <div className="calc">
        <div className="headerCalc">
          <p className="equacao">{numDois}</p>
          <p className="solucao">
            {simbolo} {numUm}
          </p>
        </div>
        <div className="botoes">
          <div className="linhas">
            <Botao
              text={"CE"}
              background={"#C0C0C0"}
              color={"#17181a"}
              onClick={() => limpar()}
            />
            <Botao
              text={"C"}
              background={"#C0C0C0"}
              color={"#17181a"}
              onClick={() => limparTudo()}
            />
            <Botao
              text={"%"}
              background={"#616161"}
              color={"#17181a"}
              onClick={() => porcentagem()}
            />
            <Botao
              text={"/"}
              background={"#FF8C00"}
              color={"#17181a"}
              onClick={() => conta("/")}
            />
          </div>
          <div className="linhas">
            <Botao
              text={"7"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(7)}
            />
            <Botao
              text={"8"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(8)}
            />
            <Botao
              text={"9"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(9)}
            />
            <Botao
              text={"X"}
              background={"#FF8C00"}
              color={"#17181a"}
              onClick={() => conta("*")}
            />
          </div>
          <div className="linhas">
            <Botao
              text={"4"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(4)}
            />
            <Botao
              text={"5"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(5)}
            />
            <Botao
              text={"6"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(6)}
            />
            <Botao
              text={"-"}
              background={"#FF8C00"}
              color={"#17181a"}
              onClick={() => conta("-")}
            />
          </div>
          <div className="linhas">
            <Botao
              text={"1"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(1)}
            />
            <Botao
              text={"2"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(2)}
            />
            <Botao
              text={"3"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(3)}
            />
            <Botao
              text={"+"}
              background={"#FF8C00"}
              color={"#17181a"}
              onClick={() => conta("+")}
            />
          </div>
          <div className="linhas">
            <ZeroBotao
              text={"0"}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcNumero(0)}
            />
            <Botao
              text={"."}
              background={"#616161"}
              color={"#FF8C00"}
              onClick={() => adcPonto()}
            />
            <Botao
              text={"="}
              background={"#2E8B57"}
              color={"#FFFFFF"}
              onClick={() => resultado()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
