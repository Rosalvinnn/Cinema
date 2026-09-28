"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function Administracao() {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (!usuarioAtual) {
      router.replace("/login");
      return;
    }

    setUsuario(usuarioAtual);
  }, [router]);

  async function sair() {
    try {
      await Parse.User.logOut();

      router.replace("/login");
    } catch (erro) {
      console.error(erro);
    }
  }

  if (!usuario) {
    return (
      <main className="paginaGerenciamento">
        <p>Verificando acesso...</p>
      </main>
    );
  }

  return (
    <main className="paginaGerenciamento">
      <header className="cabecalhoGerenciamento">
        <div>
          <h1>Área Administrativa</h1>

          <p>
            Bem-vindo,{" "}
            <strong>
              {usuario.get("username")}
            </strong>
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
          <h2>🎬 Cadastrar filme</h2>

          <p>
            Pesquise um filme na TMDB e cadastre no banco de dados.
          </p>

          <button
            className="botaoSalvarAlteracoes"
            onClick={() => router.push("/cadastro-filme")}
          >
            Cadastrar filme
          </button>
        </div>

        <div className="cardAdministrativo">
          <h2>📋 Gerenciar filmes</h2>

          <p>
            Visualize, edite ou exclua os filmes cadastrados.
          </p>

          <button
            className="botaoSalvarAlteracoes"
            onClick={() => router.push("/filmes")}
          >
            Gerenciar filmes
          </button>
        </div>

        <div className="cardAdministrativo">
          <h2>🌐 Site do cinema</h2>

          <p>
            Volte para a página onde os clientes compram seus ingressos.
          </p>

          <button
            className="botaoSalvarAlteracoes"
            onClick={() => router.push("/")}
          >
            Ir para o site
          </button>
        </div>
      </section>
    </main>
  );
}