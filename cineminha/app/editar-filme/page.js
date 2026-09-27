"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function EditarFilme() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (id) {
      buscarFilme();
    }
  }, [id]);

  const buscarFilme = async () => {
    try {
      const query = new Parse.Query("Filme");
      const filme = await query.get(id);

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
        router.push("/filmes");
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