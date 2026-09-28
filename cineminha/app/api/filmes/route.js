import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resposta = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=Carros&language=pt-BR",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: "application/json",
        },
      }
    );

    if (!resposta.ok) {
      throw new Error("Erro ao consultar a TMDB");
    }

    const dados = await resposta.json();

    return NextResponse.json(dados);
  } catch (erro) {
    console.error(erro);

    return NextResponse.json(
      { erro: "Não foi possível consultar a TMDB" },
      { status: 500 }
    );
  }
}