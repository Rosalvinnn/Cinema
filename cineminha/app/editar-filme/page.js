"use client";

import { useEffect, useState } from "react";
import Parse from "../../lib/parse";

export default function EditarFilme() {
  const [id, setId] = useState(null);

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const parametros = new URLSearchParams(window.location.search);
    const idFilme = parametros.get("id");

    setId(idFilme);

    if (idFilme) {
      buscarFilme(idFilme);
    }
  }, []);

  const buscarFilme = async (idFilme) => {
    try {
      const query = new Parse.Query("Filme");
      const filme = await query.get(idFilme);

      setNome(filme.get("nome"));
      setGenero(filme.get("genero"));
      setDuracao(filme.get("duracao"));
      setClassificacao(filme.get("classificacao"));
      setImagem(filme.get("imagem"));
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao buscar filme.");
    }
  };

  const atualizarFilme = async (e) => {
    e.preventDefault();

    if (!id) {
      setMensagem("Filme não encontrado.");
      return;
    }

    try {
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
        window.location.href = "/filmes";
      }, 1000);
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao atualizar filme.");
    }
  };

  return (
    <main>
      <h1>Editar Filme</h1>

      <form onSubmit={atualizarFilme}>
        <input
          type="text"
          placeholder="Nome do filme"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Gênero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <input
          type="number"
          placeholder="Duração em minutos"
          value={duracao}
          onChange={(e) => setDuracao(e.target.value)}
        />

        <input
          type="text"
          placeholder="Classificação"
          value={classificacao}
          onChange={(e) => setClassificacao(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button type="submit">
          Atualizar filme
        </button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </main>
  );
}