"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (usuarioAtual) {
      router.replace("/administracao");
    }
  }, [router]);

  async function fazerLogin(e) {
    e.preventDefault();

    setErro("");
    setCarregando(true);

    try {
      await Parse.User.logIn(usuario, senha);

      router.push("/administracao");
    } catch (erro) {
      console.error(erro);

      setErro("Usuário ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="paginaLogin">
      <div className="loginCard">
        <div className="loginLogo">
          <span>CINE</span>GUIBS
        </div>

        <h1>Área Administrativa</h1>

        <p className="loginDescricao">
          Entre com sua conta de administrador
        </p>

        <form onSubmit={fazerLogin} className="formularioLogin">
          <div className="formGrupo">
            <label>Usuário</label>

            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div className="formGrupo">
            <label>Senha</label>

            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          {erro && <p className="erroLogin">{erro}</p>}

          <button
            type="submit"
            className="botaoLogin"
            disabled={carregando}
          >
            {carregando ? "Entrando..." : "ENTRAR"}
          </button>
        </form>

        <button
          className="botaoVoltarLogin"
          onClick={() => router.push("/")}
        >
          Voltar para o cinema
        </button>
      </div>
    </main>
  );
}