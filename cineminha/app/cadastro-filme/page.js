"use client";

import { useState } from "react";
import Parse from "../../lib/parse";

export default function CadastroFilme() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarFilme = async (e) => {
    e.preventDefault();

    try {
      const Filme = Parse.Object.extend("Filme");
      const novoFilme = new Filme();

      novoFilme.set("nome", nome);
      novoFilme.set("genero", genero);
      novoFilme.set("duracao", Number(duracao));
      novoFilme.set("classificacao", classificacao);
      novoFilme.set("imagem", imagem);

      await novoFilme.save();

      setMensagem("Filme cadastrado com sucesso!");

      setNome("");
      setGenero("");
      setDuracao("");
      setClassificacao("");
      setImagem("");
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao cadastrar filme.");
    }
  };

  return (
    <main>
      <h1>Cadastrar Filme</h1>

      <form onSubmit={cadastrarFilme}>
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
          Cadastrar filme
        </button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </main>
  );
}