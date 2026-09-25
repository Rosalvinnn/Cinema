"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
const [filme, setFilme] = useState("");
const [horario, setHorario] = useState("");
const [cadeira, setCadeira] = useState(null);
const [comprado, setComprado] = useState(false);

const filmes = [
{
id: 1,
nome: "Vingadores: Ultimato",
imagem:
"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
},
{
id: 2,
nome: "Homem-Aranha: Sem Volta Para Casa",
imagem:
"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
},
{
id: 3,
nome: "Interestelar",
imagem:
"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
},
];

const horarios = ["14:00", "16:30", "19:00", "21:30"];

const selecionarCadeira = (numero) => {
setCadeira(numero);
setComprado(false);
};

const comprarIngresso = () => {
if (!filme || !horario || !cadeira) {
alert("Selecione o filme, o horário e uma cadeira.");
return;
}

```
setComprado(true);
```

};

return ( <main className="pagina"> <header className="header"> <div className="logo"> <span>🎬</span> CineMax </div>

```
    <nav>
      <a href="#filmes">Filmes</a>
      <a href="#horarios">Horários</a>
      <a href="#cadeiras">Cadeiras</a>
    </nav>
  </header>

  <section className="hero">
    <div>
      <p className="subtitulo">BEM-VINDO AO CINEGUIBS</p>

      <h1>
        Seu filme.
        <br />
        Sua cadeira.
        <br />
        Sua experiência.
      </h1>

      <p className="descricao">
        Escolha seu filme, horário e cadeira e garanta seu ingresso.
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
        {filmes.map((item) => (
          <div
            key={item.id}
            className={`filme ${
              filme === item.nome ? "filmeSelecionado" : ""
            }`}
            onClick={() => {
              setFilme(item.nome);
              setComprado(false);
            }}
          >
            <img src={item.imagem} alt={item.nome} />

            <div className="filmeInfo">
              <h3>{item.nome}</h3>

              {filme === item.nome && (
                <span className="selecionado">✓ Selecionado</span>
              )}
            </div>
          </div>
        ))}
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
              horario === hora ? "horarioSelecionado" : ""
            }`}
            onClick={() => {
              setHorario(hora);
              setComprado(false);
            }}
          >
            {hora}
          </button>
        ))}
      </div>
    </section>

    <section id="cadeiras" className="secao">
      <h2>Escolha sua cadeira</h2>
      <p className="textoSecao">
        Selecione uma cadeira disponível.
      </p>

      <div className="cinema">
        <div className="tela">TELA</div>

        <div className="cadeiras">
          {[1, 2, 3, 4].map((numero) => (
            <button
              key={numero}
              className={`cadeira ${
                cadeira === numero ? "cadeiraSelecionada" : ""
              }`}
              onClick={() => selecionarCadeira(numero)}
            >
              {numero}
            </button>
          ))}
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
          <strong>{filme || "Não selecionado"}</strong>
        </div>

        <div>
          <span>Horário</span>
          <strong>{horario || "Não selecionado"}</strong>
        </div>

        <div>
          <span>Cadeira</span>
          <strong>{cadeira ? `Cadeira ${cadeira}` : "Não selecionada"}</strong>
        </div>

        <div>
          <span>Ingresso</span>
          <strong>R$ 25,00</strong>
        </div>
      </div>

      <button className="botaoComprar" onClick={comprarIngresso}>
        Confirmar compra
      </button>

      {comprado && (
        <div className="sucesso">
          <span>✓</span>
          <div>
            <strong>Ingresso comprado com sucesso!</strong>
            <p>
              {filme} — {horario} — Cadeira {cadeira}
            </p>
          </div>
        </div>
      )}
    </section>
  </section>

  <footer>
    <p>© 2026 CineMax — Sistema de compra de ingressos</p>
  </footer>
</main>

);
}
