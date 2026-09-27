"use client";

import { useEffect, useState } from "react";
import Parse from "../../lib/parse";

export default function TesteBack4App() {
  const [mensagem, setMensagem] = useState("Testando conexão...");

  useEffect(() => {
    async function testar() {
      try {
        const query = new Parse.Query("Filme");
        const filmes = await query.find();

        setMensagem(
          `Conectado com sucesso! Filmes encontrados: ${filmes.length}`
        );
      } catch (erro) {
        console.error(erro);
        setMensagem("Erro ao conectar com o Back4App.");
      }
    }

    testar();
  }, []);

  return (
    <main>
      <h1>Teste Back4App</h1>
      <p>{mensagem}</p>
    </main>
  );
}