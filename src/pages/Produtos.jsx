import { useEffect, useState } from "react";
import imagemLoading from "../assets/pac-man.svg";
import { Link } from "react-router-dom";

function Produtos() {
  /* O state "produtos" é inicializado como um array vazio. Posteriormente (após o carregamento dos dados da API) */
  const [produtos, setProdutos] = useState([]);

  /* State de loading */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.log("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>
          <img src={imagemLoading} alt="Carregando..." />
        </p>
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>{produto.title}</h3>
              <p>{produto.price}</p>
              <p>{produto.description}</p>
              <p>
                {" "}
                <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
              </p>
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
