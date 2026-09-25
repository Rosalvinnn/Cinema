"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Confirmacao() {
const [compra, setCompra] = useState(null);

useEffect(() => {
const dados = localStorage.getItem("compra");

```
if (dados) {
  setCompra(JSON.parse(dados));
}
```

}, []);

if (!compra) {
return ( <main className="confirmacaoPagina"> <div className="confirmacaoCard"> <h1>Nenhuma compra encontrada</h1>

```
      <p>
        Não encontramos os dados do seu ingresso.
      </p>

      <Link href="/" className="botaoVoltar">
        Voltar para o cinema
      </Link>
    </div>
  </main>
);

}

return ( <main className="confirmacaoPagina"> <div className="confirmacaoCard">

    <div className="iconeSucesso">
      ✓
    </div>

    <p className="compraRealizada">
      COMPRA REALIZADA
    </p>

    <h1>
      Ingresso confirmado!
    </h1>

    <p className="mensagem">
      Sua compra foi realizada com sucesso.
    </p>

    <div className="ingresso">

      <div className="ingressoTopo">
        <span>CINEMAX</span>
        <span>INGRESSO</span>
      </div>

      <div className="linha"></div>

      <div className="informacao">

        <div>
          <span>FILME</span>
          <strong>{compra.filme}</strong>
        </div>

        <div className="duasColunas">

          <div>
            <span>HORÁRIO</span>
            <strong>{compra.horario}</strong>
          </div>

          <div>
            <span>CADEIRAS</span>
            <strong>
              {compra.cadeiras.join(", ")}
            </strong>
          </div>

        </div>

        <div className="duasColunas">

          <div>
            <span>INGRESSOS</span>
            <strong>
              {compra.quantidade}
            </strong>
          </div>

          <div>
            <span>TOTAL</span>
            <strong>
              R$ {compra.valor.toFixed(2).replace(".", ",")}
            </strong>
          </div>

        </div>

      </div>

      <div className="codigo">
        <div className="barras">
          || ||| | |||| || ||| | ||||
        </div>

        <small>
          Código do ingresso
        </small>
      </div>

    </div>

    <div className="botoesConfirmacao">

      <button
        className="botaoImprimir"
        onClick={() => window.print()}
      >
        🖨 Imprimir ingresso
      </button>

      <Link
        href="/"
        className="botaoVoltar"
      >
        Comprar outro ingresso
      </Link>

    </div>

  </div>
</main>

);
}