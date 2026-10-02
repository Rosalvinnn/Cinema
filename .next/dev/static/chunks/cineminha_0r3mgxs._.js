(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cineminha/app/filmes/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filmes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cineminha/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cineminha/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cineminha/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cineminha/lib/parse.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Filmes() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [filmes, setFilmes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carregando, setCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Filmes.useEffect": ()=>{
            const usuarioAtual = __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.current();
            if (!usuarioAtual) {
                router.replace("/login");
                return;
            }
            carregarFilmes();
        }
    }["Filmes.useEffect"], [
        router
    ]);
    async function carregarFilmes() {
        try {
            const query = new __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Query("Filme");
            query.descending("createdAt");
            const resultados = await query.find();
            const lista = resultados.map((filme)=>({
                    id: filme.id,
                    nome: filme.get("nome"),
                    genero: filme.get("genero"),
                    duracao: filme.get("duracao"),
                    classificacao: filme.get("classificacao"),
                    imagem: filme.get("imagem")
                }));
            setFilmes(lista);
        } catch (erro) {
            console.error(erro);
        } finally{
            setCarregando(false);
        }
    }
    async function excluirFilme(id) {
        const confirmar = window.confirm("Tem certeza que deseja excluir este filme?");
        if (!confirmar) {
            return;
        }
        try {
            const usuarioAtual = __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.current();
            if (!usuarioAtual) {
                router.replace("/login");
                return;
            }
            const query = new __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Query("Filme");
            const filme = await query.get(id);
            await filme.destroy();
            setFilmes((filmesAtuais)=>filmesAtuais.filter((filme)=>filme.id !== id));
        } catch (erro) {
            console.error(erro);
            alert("Não foi possível excluir o filme.");
        }
    }
    function editarFilme(id) {
        router.push(`/editar-filme?id=${id}`);
    }
    if (carregando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "paginaGerenciamento",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Carregando filmes..."
            }, void 0, false, {
                fileName: "[project]/cineminha/app/filmes/page.js",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/cineminha/app/filmes/page.js",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "paginaGerenciamento",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "cabecalhoGerenciamento",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Gerenciar Filmes"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/filmes/page.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Filmes cadastrados no CineMinha"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/filmes/page.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/filmes/page.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "botaoVoltarGerenciamento",
                        onClick: ()=>router.push("/administracao"),
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/cineminha/app/filmes/page.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cineminha/app/filmes/page.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "listaFilmes",
                children: filmes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Nenhum filme cadastrado."
                }, void 0, false, {
                    fileName: "[project]/cineminha/app/filmes/page.js",
                    lineNumber: 115,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gridFilmes",
                    children: filmes.map((filme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cardFilme",
                            children: [
                                filme.imagem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: filme.imagem,
                                    alt: filme.nome
                                }, void 0, false, {
                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                    lineNumber: 121,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "semImagem",
                                    children: "Sem imagem"
                                }, void 0, false, {
                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                    lineNumber: 126,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cardFilmeInfo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: filme.nome
                                        }, void 0, false, {
                                            fileName: "[project]/cineminha/app/filmes/page.js",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Gênero:"
                                                }, void 0, false, {
                                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                filme.genero
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cineminha/app/filmes/page.js",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Duração:"
                                                }, void 0, false, {
                                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                filme.duracao,
                                                " minutos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cineminha/app/filmes/page.js",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Classificação:"
                                                }, void 0, false, {
                                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                filme.classificacao
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cineminha/app/filmes/page.js",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "botoesFilme",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "botaoEditar",
                                                    onClick: ()=>editarFilme(filme.id),
                                                    children: "Editar"
                                                }, void 0, false, {
                                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "botaoExcluir",
                                                    onClick: ()=>excluirFilme(filme.id),
                                                    children: "Excluir"
                                                }, void 0, false, {
                                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/cineminha/app/filmes/page.js",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/cineminha/app/filmes/page.js",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, filme.id, true, {
                            fileName: "[project]/cineminha/app/filmes/page.js",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/cineminha/app/filmes/page.js",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/cineminha/app/filmes/page.js",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cineminha/app/filmes/page.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(Filmes, "D3SUeyWS0SFgWieZj2OzR7PEfG4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Filmes;
var _c;
__turbopack_context__.k.register(_c, "Filmes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/cineminha/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/cineminha/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse/index.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].initialize(("TURBOPACK compile-time value", "TVbEFESmV7Hh89NwQe7wWlrutGbQ1FNSaCpY5qpX"), ("TURBOPACK compile-time value", "8qYqt6C1CW6leQaayoq38KlFUUFe6IiIycVt1rc8"));
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].serverURL = ("TURBOPACK compile-time value", "https://parseapi.back4app.com/");
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=cineminha_0r3mgxs._.js.map