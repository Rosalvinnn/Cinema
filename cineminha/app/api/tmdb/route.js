import { NextResponse } from "next/server";

const TOKEN = process.env.TMDB_API_TOKEN;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const nome = searchParams.get("q");
    const id = searchParams.get("id");

    if (!nome && !id) {
      return NextResponse.json(
        { erro: "Informe o nome ou o ID do filme." },
        { status: 400 }
      );
    }

    if (nome) {
      const resposta = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          nome
        )}&language=pt-BR`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
          },
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao pesquisar filmes.");
      }

      const dados = await resposta.json();

      return NextResponse.json(dados.results);
    }

    const resposta = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&append_to_response=release_dates`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          accept: "application/json",
        },
      }
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar detalhes do filme.");
    }

    const filme = await resposta.json();

    let classificacao = "";

    const brasil = filme.release_dates?.results?.find(
      (pais) => pais.iso_3166_1 === "BR"
    );

    if (brasil) {
      const certificacao = brasil.release_dates.find(
        (item) => item.certification
      );

      if (certificacao) {
        classificacao = certificacao.certification;
      }
    }

    const resultado = {
      nome: filme.title,
      genero:
        filme.genres?.map((genero) => genero.name).join(", ") || "",
      duracao: filme.runtime || 0,
      classificacao: classificacao || "Não informado",
      imagem: filme.poster_path
        ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
        : "",
    };

    return NextResponse.json(resultado);
  } catch (erro) {
    console.error(erro);

    return NextResponse.json(
      { erro: "Erro ao consultar a TMDB." },
      { status: 500 }
    );
  }
}