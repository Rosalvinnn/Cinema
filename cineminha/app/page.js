"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../lib/parse";
import "./globals.css";

export default function Home() {
  const router = useRouter();

  const [filme, setFilme] = useState("");
  const [horario, setHorario] = useState("");
  const [cadeiras, setCadeiras] = useState([]);

  const [filmes, setFilmes] = useState([]);
  const [carregandoFilmes, setCarregandoFilmes] = useState(true);
  const [comprando, setComprando] = useState(false);

  const horarios = ["14:00", "16:30", "19:00", "21:30"];

  useEffect(() => {
    console.log("Parse App ID:", process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID);
    console.log("Parse Server:", process.env.NEXT_PUBLIC_PARSE_SERVER_URL);

    buscarFilmes();
  }, []);

  const buscarFilmes = async () => {
    try {
      const query = new Parse.Query("Filme");
      const resultados = await query.find();

      const listaFilmes = resultados.map((filme) => ({
        id: filme.id,
        nome: filme.get("nome"),
        genero: filme.get("genero"),
        duracao: filme.get("duracao"),
        classificacao: filme.get("classificacao"),
        imagem: filme.get("imagem"),
      }));

      setFilmes(listaFilmes);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
    } finally {
      setCarregandoFilmes(false);
    }
  };

  const selecionarCadeira = (numero) => {
    if (cadeiras.includes(numero)) {
      setCadeiras(
        cadeiras.filter((item) => item !== numero)
      );
    } else {
      setCadeiras([...cadeiras, numero]);
    }
  };

  const comprarIngresso = async () => {
    if (!filme) {
      alert("Selecione um filme.");
      return;
    }

    if (!horario) {
      alert("Selecione um horário.");
      return;
    }

    if (cadeiras.length === 0) {
      alert("Selecione pelo menos uma cadeira.");
      return;
    }

    const usuario = Parse.User.current();

    if (!usuario) {
      alert(
        "Você precisa estar logado para comprar um ingresso."
      );

      router.push("/conta/login");
      return;
    }

    setComprando(true);

    try {
      const quantidade = cadeiras.length;
      const valor = quantidade * 25;

      const Ingresso = Parse.Object.extend("Ingresso");
      const ingresso = new Ingresso();

      ingresso.set("usuario", usuario);
      ingresso.set("filme", filme);
      ingresso.set("horario", horario);
      ingresso.set("cadeiras", cadeiras);
      ingresso.set("quantidade", quantidade);
      ingresso.set("valor", valor);

      const acl = new Parse.ACL(usuario);

      acl.setReadAccess(usuario, true);
      acl.setWriteAccess(usuario, false);

      ingresso.setACL(acl);

      await ingresso.save();

      const dadosCompra = {
        filme: filme,
        horario: horario,
        cadeiras: cadeiras,
        quantidade: quantidade,
        valor: valor,
      };

      localStorage.setItem(
        "compra",
        JSON.stringify(dadosCompra)
      );

      router.push("/confirmacao");
    } catch (erro) {
      console.error("Erro ao salvar ingresso:", erro);

      alert(
        "Não foi possível salvar a compra. Tente novamente."
      );
    } finally {
      setComprando(false);
    }
  };

  return (
    <main className="pagina">
      <header className="header">
        <div className="logo">
          <span>🎬</span> CineMinha
        </div>

        <nav>
          <a href="#filmes">Filmes</a>
          <a href="#horarios">Horários</a>
          <a href="#cadeiras">Cadeiras</a>

        <button
          className="botaoConta"
          onClick={() => {
            const usuario = Parse.User.current();

            if (usuario) {
              router.push("/minha-conta");
            } else {
              router.push("/conta/login");
            }
          }}
        >
          👤 Minha conta
        </button>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="subtitulo">
            BEM-VINDO AO CineMinha
          </p>

          <h1>
            Seu filme.
            <br />
            Sua cadeira.
            <br />
            Sua experiência.
          </h1>

          <p className="descricao">
            Escolha seu filme, horário e suas cadeiras e
            garanta seus ingressos.
          </p>

          <a href="#filmes" className="botaoHero">
            Comprar ingresso
          </a>
        </div>
      </section>

      <section className="conteudo">
        <section id="filmes" className="secao">
          <h2>Escolha seu filme</h2>

          <p className="textoSecao">
            Selecione o filme que deseja assistir.
          </p>

          <div className="filmes">
            {carregandoFilmes ? (
              <p>Carregando filmes...</p>
            ) : filmes.length === 0 ? (
              <p>Nenhum filme disponível.</p>
            ) : (
              filmes.map((item) => (
                <div
                  key={item.id}
                  className={`filme ${
                    filme === item.nome
                      ? "filmeSelecionado"
                      : ""
                  }`}
                  onClick={() => setFilme(item.nome)}
                >
                  <img
                    src={item.imagem}
                    alt={item.nome}
                  />

                  <div className="filmeInfo">
                    <h3>{item.nome}</h3>

                    {item.genero && (
                      <p>{item.genero}</p>
                    )}

                    {item.duracao && (
                      <p>{item.duracao} minutos</p>
                    )}

                    {item.classificacao && (
                      <p>{item.classificacao}</p>
                    )}

                    {filme === item.nome && (
                      <span className="selecionado">
                        ✓ Selecionado
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section id="horarios" className="secao">
          <h2>Escolha o horário</h2>

          <p className="textoSecao">
            Selecione um dos horários disponíveis.
          </p>

          <div className="horarios">
            {horarios.map((hora) => (
              <button
                key={hora}
                className={`horario ${
                  horario === hora
                    ? "horarioSelecionado"
                    : ""
                }`}
                onClick={() => setHorario(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
        </section>

        <section id="cadeiras" className="secao">
          <h2>Escolha suas cadeiras</h2>

          <p className="textoSecao">
            Você pode selecionar mais de uma cadeira.
          </p>

          <div className="cinema">
            <div className="tela">TELA</div>

          <div className="cadeiras">
            <div className="fileira">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((numero) => (
                <button
                  key={numero}
                  className={`cadeira ${
                    cadeiras.includes(numero)
                      ? "cadeiraSelecionada"
                      : ""
                  }`}
                  onClick={() => selecionarCadeira(numero)}
                >
                  {numero}
                </button>
              ))}
            </div>

            <div className="fileira">
              {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((numero) => (
                <button
                  key={`segunda-${numero}`}
                  className={`cadeira ${
                    cadeiras.includes(numero + 10)
                      ? "cadeiraSelecionada"
                      : ""
                  }`}
                  onClick={() => selecionarCadeira(numero + 10)}
                >
                  {numero}
                </button>
              ))}
            </div>
          </div>
            <div className="legenda">
              <div>
                <span className="quadrado disponivel"></span>
                Disponível
              </div>

              <div>
                <span className="quadrado selecionada"></span>
                Selecionada
              </div>
            </div>
          </div>
        </section>

        <section className="resumo">
          <h2>Resumo da compra</h2>

          <div className="resumoConteudo">
            <div>
              <span>Filme</span>

              <strong>
                {filme || "Não selecionado"}
              </strong>
            </div>

            <div>
              <span>Horário</span>

              <strong>
                {horario || "Não selecionado"}
              </strong>
            </div>

            <div>
              <span>Cadeiras</span>

              <strong>
                {cadeiras.length > 0
                  ? cadeiras.join(", ")
                  : "Não selecionadas"}
              </strong>
            </div>

            <div>
              <span>Total</span>

              <strong>
                R${" "}
                {(cadeiras.length * 25)
                  .toFixed(2)
                  .replace(".", ",")}
              </strong>
            </div>
          </div>

          <button
            className="botaoComprar"
            onClick={comprarIngresso}
            disabled={comprando}
          >
            {comprando
              ? "Salvando compra..."
              : "Confirmar compra"}
          </button>
        </section>
      </section>

      <footer>
        <p>
          © 2026 CineMinha — Sistema de compra de ingressos
        </p>
      </footer>
    </main>
  );
}