"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Parse from "../../lib/parse";

export default function MeusIngressos() {
  const router = useRouter();

  const [ingressos, setIngressos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarIngressos();
  }, []);

  async function carregarIngressos() {
    try {
      const usuario = Parse.User.current();

      if (!usuario) {
        router.replace("/conta/login");
        return;
      }

      const query = new Parse.Query("Ingresso");

      query.equalTo("usuario", usuario);
      query.descending("createdAt");

      const resultados = await query.find();

      const lista = resultados.map((ingresso) => ({
        id: ingresso.id,
        filme: ingresso.get("filme"),
        horario: ingresso.get("horario"),
        cadeiras: ingresso.get("cadeiras") || [],
        quantidade: ingresso.get("quantidade"),
        valor: ingresso.get("valor"),
        data: ingresso.createdAt,
      }));

      setIngressos(lista);
    } catch (erro) {
      console.error(
        "Erro ao buscar ingressos:",
        erro
      );
    } finally {
      setCarregando(false);
    }
  }

  function formatarData(data) {
    if (!data) {
      return "";
    }

    return new Date(data).toLocaleDateString(
      "pt-BR"
    );
  }

  if (carregando) {
    return (
      <main className="paginaGerenciamento">
        <p>Carregando seus ingressos...</p>
      </main>
    );
  }

  return (
    <main className="paginaGerenciamento">
      <header className="cabecalhoGerenciamento">
        <div>
          <h1>Meus Ingressos</h1>

          <p>
            Aqui estão seus ingressos comprados.
          </p>
        </div>

        <button
          className="botaoVoltarGerenciamento"
          onClick={() => router.push("/minha-conta")}
        >
          Voltar
        </button>
      </header>

      <section className="listaFilmes">
        {ingressos.length === 0 ? (
          <div className="cardAdministrativo">
            <h2>Você ainda não possui ingressos.</h2>

            <p>
              Escolha um filme e faça sua primeira
              compra!
            </p>

            <button
              className="botaoSalvarAlteracoes"
              onClick={() => router.push("/")}
            >
              Comprar ingresso
            </button>
          </div>
        ) : (
          <div className="gridFilmes">
            {ingressos.map((ingresso) => (
              <div
                className="cardFilme"
                key={ingresso.id}
              >
                <div className="cardFilmeInfo">
                  <h2>{ingresso.filme}</h2>

                  <p>
                    <strong>Horário:</strong>{" "}
                    {ingresso.horario}
                  </p>

                  <p>
                    <strong>Cadeiras:</strong>{" "}
                    {ingresso.cadeiras.join(", ")}
                  </p>

                  <p>
                    <strong>Quantidade:</strong>{" "}
                    {ingresso.quantidade}
                  </p>

                  <p>
                    <strong>Valor:</strong>{" "}
                    R${" "}
                    {Number(ingresso.valor)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>

                  <p>
                    <strong>Compra realizada em:</strong>{" "}
                    {formatarData(ingresso.data)}
                  </p>

                  <div className="mensagemFilme">
                    ✓ Ingresso confirmado
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}