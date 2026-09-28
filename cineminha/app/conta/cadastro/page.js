"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../../lib/parse";

export default function CadastroConta() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function criarConta(e) {
    e.preventDefault();

    setMensagem("");
    setErro("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não são iguais.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setCarregando(true);

    try {
      const usuarioParse = new Parse.User();

      usuarioParse.set("username", usuario);
      usuarioParse.set("email", email);
      usuarioParse.set("password", senha);
      usuarioParse.set("nome", nome);

      await usuarioParse.signUp();

      setMensagem("Conta criada com sucesso!");

      setTimeout(() => {
        router.push("/conta/login");
      }, 1000);
    } catch (erro) {
      console.error(erro);

      if (erro.code === 202) {
        setErro("Esse nome de usuário já está sendo usado.");
      } else if (erro.code === 203) {
        setErro("Esse email já está sendo usado.");
      } else {
        setErro("Não foi possível criar a conta.");
      }
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

        <h1>Criar conta</h1>

        <p className="loginDescricao">
          Crie sua conta para comprar ingressos
        </p>

        <form
          onSubmit={criarConta}
          className="formularioLogin"
        >
          <div className="formGrupo">
            <label>Nome</label>

            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="formGrupo">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@email.com"
              required
            />
          </div>

          <div className="formGrupo">
            <label>Nome de usuário</label>

            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Escolha um usuário"
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

          <div className="formGrupo">
            <label>Confirmar senha</label>

            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) =>
                setConfirmarSenha(e.target.value)
              }
              placeholder="Digite novamente"
              required
            />
          </div>

          {erro && (
            <p className="erroLogin">
              {erro}
            </p>
          )}

          {mensagem && (
            <p className="mensagemFilme">
              {mensagem}
            </p>
          )}

          <button
            type="submit"
            className="botaoLogin"
            disabled={carregando}
          >
            {carregando
              ? "Criando..."
              : "CRIAR CONTA"}
          </button>
        </form>

        <button
          className="botaoVoltarLogin"
          onClick={() => router.push("/conta/login")}
        >
          Já tenho uma conta
        </button>

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