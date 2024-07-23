import React, { useState, useCallback } from "react";
import "./MeuComponente.css";

const MeuComponente: React.FC = () => {
  const [arg1, setArg1] = useState<number>(0);
  const [arg2, setArg2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const realizarOperacao = useCallback(() => {
    const result = arg1 + arg2; // Exemplo simples de operação
    setResultado(result);
  }, [arg1, arg2]);

  return (
    <div>
      <button
        className="botao botao-incrementar-arg1"
        onClick={() => setArg1(arg1 + 1)}
      >
        Incrementar Arg1
      </button>
      <button
        className="botao botao-incrementar-arg2"
        onClick={() => setArg2(arg2 + 1)}
      >
        Incrementar Arg2
      </button>
      <button
        className="botao botao-realizar-operacao"
        onClick={realizarOperacao}
      >
        Realizar Operação
      </button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default MeuComponente;
