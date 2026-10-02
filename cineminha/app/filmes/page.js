"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function Filmes() {
  const router = useRouter();

  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (!usuarioAtual) {
      router.replace("/login");
      return;
    }

    carregarFilmes();
  }, [router]);

  async function carregarFilmes() {
    try {
      const query = new Parse.Query("Filme");

      query.descending("createdAt");

      const resultados = await query.find();

      const lista = resultados.map((filme) => ({
        id: filme.id,
        nome: filme.get("nome"),
        genero: filme.get("genero"),
        duracao: filme.get("duracao"),
        classificacao: filme.get("classificacao"),
        imagem: filme.get("imagem"),
      }));

      setFilmes(lista);
    } catch (erro) {
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  }

  async function excluirFilme(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este filme?"
    );

    if (!confirmar) {
      return;
    }

    try {
      const usuarioAtual = Parse.User.current();

      if (!usuarioAtual) {
        router.replace("/login");
        return;
      }

      const query = new Parse.Query("Filme");

      const filme = await query.get(id);

      await filme.destroy();

      setFilmes((filmesAtuais) =>
        filmesAtuais.filter((filme) => filme.id !== id)
      );
    } catch (erro) {
      console.error(erro);

      alert("Não foi possível excluir o filme.");
    }
  }

  function editarFilme(id) {
    router.push(`/editar-filme?id=${id}`);
  }

  if (carregando) {
    return (
      <main className="paginaGerenciamento">
        <p>Carregando filmes...</p>
      </main>
    );
  }

  return (
    <main className="paginaGerenciamento">
      <header className="cabecalhoGerenciamento">
        <div>
          <h1>Gerenciar Filmes</h1>

          <p>
            Filmes cadastrados no CineMinha
          </p>
        </div>

        <button
          className="botaoVoltarGerenciamento"
          onClick={() => router.push("/administracao")}
        >
          Voltar
        </button>
      </header>

      <section className="listaFilmes">
        {filmes.length === 0 ? (
          <p>Nenhum filme cadastrado.</p>
        ) : (
          <div className="gridFilmes">
            {filmes.map((filme) => (
              <div className="cardFilme" key={filme.id}>
                {filme.imagem ? (
                  <img
                    src={filme.imagem}
                    alt={filme.nome}
                  />
                ) : (
                  <div className="semImagem">
                    Sem imagem
                  </div>
                )}

                <div className="cardFilmeInfo">
                  <h2>{filme.nome}</h2>

                  <p>
                    <strong>Gênero:</strong>{" "}
                    {filme.genero}
                  </p>

                  <p>
                    <strong>Duração:</strong>{" "}
                    {filme.duracao} minutos
                  </p>

                  <p>
                    <strong>Classificação:</strong>{" "}
                    {filme.classificacao}
                  </p>

                  <div className="botoesFilme">
                    <button
                      className="botaoEditar"
                      onClick={() => editarFilme(filme.id)}
                    >
                      Editar
                    </button>

                    <button
                      className="botaoExcluir"
                      onClick={() => excluirFilme(filme.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}