"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function MinhaConta() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (!usuarioAtual) {
      router.replace("/conta/login");
      return;
    }

    setUsuario(usuarioAtual);
  }, [router]);

  async function sair() {
    await Parse.User.logOut();

    router.replace("/");
  }

  if (!usuario) {
    return (
      <main className="paginaGerenciamento">
        <p>Carregando...</p>
      </main>
    );
  }

  return (
    <main className="paginaGerenciamento">
      <header className="cabecalhoGerenciamento">
        <div>
          <h1>Minha Conta</h1>

          <p>
            Olá, {usuario.get("nome") || usuario.get("username")}!
          </p>
        </div>

        <button
          className="botaoVoltarGerenciamento"
          onClick={sair}
        >
          Sair
        </button>
      </header>

      <section className="painelAdministrativo">
        <div className="cardAdministrativo">
          <h2>👤 Minha conta</h2>

          <p>
            <strong>Nome:</strong>{" "}
            {usuario.get("nome")}
          </p>

          <p>
            <strong>Usuário:</strong>{" "}
            {usuario.get("username")}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {usuario.get("email")}
          </p>
        </div>

        <div className="cardAdministrativo">
          <h2>🎟️ Meus ingressos</h2>

          <p>
            Consulte todos os ingressos que você já comprou.
          </p>

          <button
            className="botaoSalvarAlteracoes"
            onClick={() => router.push("/meus-ingressos")}
          >
            Ver meus ingressos
          </button>
        </div>

        <div className="cardAdministrativo">
          <h2>🎬 Comprar ingresso</h2>

          <p>
            Escolha um filme, horário e suas cadeiras.
          </p>

          <button
            className="botaoSalvarAlteracoes"
            onClick={() => router.push("/")}
          >
            Comprar ingresso
          </button>
        </div>
      </section>
    </main>
  );
}