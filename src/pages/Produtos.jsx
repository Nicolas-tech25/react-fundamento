import { useState } from "react";

function Produtos() {
  /* O state "produtos" é inicializado como um array vazio. Posteriormente (após o carregamento dos dados da API) */
  const [produtos, setProdutos] = useState([]);

  const carregarDados = async () => {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products`);
      const dados = await resposta.json();
      console.log(dados);
      setProdutos(dados);
    } catch (error) {
      console.log("Houve um erro: " + error);
    }
  };

  carregarDados();

  return <h2>Produtos</h2>;
}

export default Produtos;
