"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function EditarFilme() {
  const router = useRouter();

  const [id, setId] = useState(null);

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [imagem, setImagem] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (!usuarioAtual) {
      router.replace("/login");
      return;
    }

    const parametros = new URLSearchParams(
      window.location.search
    );

    const filmeId = parametros.get("id");

    if (!filmeId) {
      router.replace("/filmes");
      return;
    }

    setId(filmeId);

    carregarFilme(filmeId);
  }, [router]);

  async function carregarFilme(filmeId) {
    try {
      const query = new Parse.Query("Filme");

      const filme = await query.get(filmeId);

      setNome(filme.get("nome") || "");
      setGenero(filme.get("genero") || "");
      setDuracao(filme.get("duracao") || "");
      setClassificacao(
        filme.get("classificacao") || ""
      );
      setImagem(filme.get("imagem") || "");
    } catch (erro) {
      console.error(erro);

      setMensagem("Não foi possível carregar o filme.");
    } finally {
      setCarregando(false);
    }
  }

  async function salvarAlteracoes(e) {
    e.preventDefault();

    try {
      const usuarioAtual = Parse.User.current();

      if (!usuarioAtual) {
        router.replace("/login");
        return;
      }

      const query = new Parse.Query("Filme");

      const filme = await query.get(id);

      filme.set("nome", nome);
      filme.set("genero", genero);
      filme.set("duracao", Number(duracao));
      filme.set("classificacao", classificacao);
      filme.set("imagem", imagem);

      await filme.save();

      setMensagem("Filme atualizado com sucesso!");

      setTimeout(() => {
        router.push("/filmes");
      }, 1000);
    } catch (erro) {
      console.error(erro);

      setMensagem("Erro ao atualizar o filme.");
    }
  }

  if (carregando) {
    return (
      <main className="editarFilmePagina">
        <p>Carregando filme...</p>
      </main>
    );
  }

  return (
    <main className="editarFilmePagina">
      <div className="editarFilmeCard">
        <div className="cabecalhoGerenciamento">
          <div>
            <h1>Editar Filme</h1>

            <p>
              Altere as informações do filme
            </p>
          </div>

          <button
            className="botaoVoltarGerenciamento"
            onClick={() => router.push("/filmes")}
          >
            Voltar
          </button>
        </div>

        <form
          onSubmit={salvarAlteracoes}
          className="formularioFilme"
        >
          <div className="formGrupo">
            <label>Nome</label>

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="formGrupo">
            <label>Gênero</label>

            <input
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            />
          </div>

          <div className="formGrupo">
            <label>Duração</label>

            <input
              type="number"
              value={duracao}
              onChange={(e) => setDuracao(e.target.value)}
              required
            />
          </div>

          <div className="formGrupo">
            <label>Classificação</label>

            <input
              type="text"
              value={classificacao}
              onChange={(e) =>
                setClassificacao(e.target.value)
              }
              required
            />
          </div>

          <div className="formGrupo">
            <label>Imagem</label>

            <input
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="botaoSalvarAlteracoes"
          >
            Salvar alterações
          </button>

          {mensagem && (
            <p className="mensagemFilme">
              {mensagem}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}