"use client";

import { useEffect, useState } from "react";
import Parse from "../../lib/parse";

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarFilmes();
  }, []);

  const buscarFilmes = async () => {
    try {
      const query = new Parse.Query("Filme");
      const resultados = await query.find();

      const listaFilmes = resultados.map((filme) => ({
        id: filme.id,
        nome: filme.get("nome"),
        genero: filme.get("genero"),
        duracao: filme.get("duracao"),
        classificacao: filme.get("classificacao"),
        imagem: filme.get("imagem"),
      }));

      setFilmes(listaFilmes);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    } finally {
      setCarregando(false);
    }
  };

  const excluirFilme = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este filme?"
    );

    if (!confirmar) {
      return;
    }

    try {
      const query = new Parse.Query("Filme");
      const filme = await query.get(id);

      await filme.destroy();

      setFilmes((filmesAtuais) =>
        filmesAtuais.filter((item) => item.id !== id)
      );
    } catch (erro) {
      console.error("Erro ao excluir filme:", erro);
      alert("Erro ao excluir filme.");
    }
  };

  const editarFilme = (id) => {
    window.location.href = `/editar-filme?id=${id}`;
  };

  if (carregando) {
    return <h1>Carregando filmes...</h1>;
  }

  return (
    <main>
      <h1>Filmes cadastrados</h1>

      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado.</p>
      ) : (
        filmes.map((filme) => (
          <div key={filme.id}>
            <h2>{filme.nome}</h2>

            <p>Gênero: {filme.genero}</p>

            <p>Duração: {filme.duracao} minutos</p>

            <p>Classificação: {filme.classificacao}</p>

            {filme.imagem && (
              <img
                src={filme.imagem}
                alt={filme.nome}
                width="200"
              />
            )}

            <br />

            <button onClick={() => editarFilme(filme.id)}>
              Editar
            </button>

            <button onClick={() => excluirFilme(filme.id)}>
              Excluir
            </button>
          </div>
        ))
      )}
    </main>
  );
}