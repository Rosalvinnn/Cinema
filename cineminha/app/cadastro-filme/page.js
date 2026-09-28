"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function CadastroFilme() {
  const router = useRouter();

  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);

  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [imagem, setImagem] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const usuarioAtual = Parse.User.current();

    if (!usuarioAtual) {
      router.replace("/login");
    }
  }, [router]);

  async function pesquisarFilmes() {
    if (!busca.trim()) {
      return;
    }

    setCarregando(true);
    setMensagem("");

    try {
      const resposta = await fetch(
        `/api/tmdb?q=${encodeURIComponent(busca)}`
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro || "Erro ao pesquisar.");
      }

      setResultados(dados);
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao pesquisar filmes.");
    } finally {
      setCarregando(false);
    }
  }

  async function selecionarFilme(id) {
    try {
      setMensagem("Buscando informações do filme...");

      const resposta = await fetch(`/api/tmdb?id=${id}`);

      const filme = await resposta.json();

      if (!resposta.ok) {
        throw new Error(filme.erro || "Erro ao buscar filme.");
      }

      setNome(filme.nome);
      setGenero(filme.genero);
      setDuracao(filme.duracao);
      setClassificacao(filme.classificacao);
      setImagem(filme.imagem);

      setResultados([]);
      setMensagem("Filme selecionado!");
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao carregar informações do filme.");
    }
  }

  async function cadastrarFilme(e) {
    e.preventDefault();

    try {
      const usuarioAtual = Parse.User.current();

      if (!usuarioAtual) {
        router.replace("/login");
        return;
      }

      const Filme = Parse.Object.extend("Filme");
      const filme = new Filme();

      filme.set("nome", nome);
      filme.set("genero", genero);
      filme.set("duracao", Number(duracao));
      filme.set("classificacao", classificacao);
      filme.set("imagem", imagem);

      await filme.save();

      setMensagem("Filme cadastrado com sucesso!");

      setNome("");
      setGenero("");
      setDuracao("");
      setClassificacao("");
      setImagem("");
    } catch (erro) {
      console.error(erro);

      setMensagem("Erro ao cadastrar o filme.");
    }
  }

  return (
    <main className="paginaGerenciamento">
      <header className="cabecalhoGerenciamento">
        <div>
          <h1>Cadastrar Filme</h1>
          <p>Adicione um novo filme ao CineGuibs</p>
        </div>

        <button
          className="botaoVoltarGerenciamento"
          onClick={() => router.push("/administracao")}
        >
          Voltar
        </button>
      </header>

      <section className="pesquisaTMDB">
        <h2>Pesquisar filme na TMDB</h2>

        <div className="campoPesquisa">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Digite o nome do filme..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                pesquisarFilmes();
              }
            }}
          />

          <button
            className="botaoPesquisa"
            onClick={pesquisarFilmes}
          >
            {carregando ? "Pesquisando..." : "Pesquisar"}
          </button>
        </div>
      </section>

      {resultados.length > 0 && (
        <section className="resultadosTMDB">
          <h2>Resultados encontrados</h2>

          <div className="cardsTMDB">
            {resultados.map((filme) => (
              <div className="cardTMDB" key={filme.id}>
                {filme.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    alt={filme.title}
                  />
                ) : (
                  <div className="semImagem">
                    Sem imagem
                  </div>
                )}

                <div className="cardTMDBInfo">
                  <h3>{filme.title}</h3>

                  <p>
                    {filme.release_date
                      ? filme.release_date.substring(0, 4)
                      : "Ano não informado"}
                  </p>

                  <button
                    className="botaoUsarFilme"
                    onClick={() => selecionarFilme(filme.id)}
                  >
                    Usar este filme
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="formularioFilme">
        <h2>Informações do filme</h2>

        <form onSubmit={cadastrarFilme}>
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
            <label>Duração em minutos</label>

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
              onChange={(e) => setClassificacao(e.target.value)}
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
            Cadastrar filme
          </button>
        </form>

        {mensagem && (
          <p className="mensagemFilme">
            {mensagem}
          </p>
        )}
      </section>
    </main>
  );
}