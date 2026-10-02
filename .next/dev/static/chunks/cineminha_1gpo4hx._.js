(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/cineminha/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/cineminha/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [filme, setFilme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [horario, setHorario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cadeiras, setCadeiras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filmes, setFilmes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [carregandoFilmes, setCarregandoFilmes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [comprando, setComprando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const horarios = [
        "14:00",
        "16:30",
        "19:00",
        "21:30"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            console.log("Parse App ID:", ("TURBOPACK compile-time value", "TVbEFESmV7Hh89NwQe7wWlrutGbQ1FNSaCpY5qpX"));
            console.log("Parse Server:", ("TURBOPACK compile-time value", "https://parseapi.back4app.com/"));
            buscarFilmes();
        }
    }["Home.useEffect"], []);
    const buscarFilmes = async ()=>{
        try {
            const query = new __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Query("Filme");
            const resultados = await query.find();
            const listaFilmes = resultados.map((filme)=>({
                    id: filme.id,
                    nome: filme.get("nome"),
                    genero: filme.get("genero"),
                    duracao: filme.get("duracao"),
                    classificacao: filme.get("classificacao"),
                    imagem: filme.get("imagem")
                }));
            setFilmes(listaFilmes);
        } catch (erro) {
            console.error("Erro ao buscar filmes:", erro);
        } finally{
            setCarregandoFilmes(false);
        }
    };
    const selecionarCadeira = (numero)=>{
        if (cadeiras.includes(numero)) {
            setCadeiras(cadeiras.filter((item)=>item !== numero));
        } else {
            setCadeiras([
                ...cadeiras,
                numero
            ]);
        }
    };
    const comprarIngresso = async ()=>{
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
        const usuario = __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.current();
        if (!usuario) {
            alert("Você precisa estar logado para comprar um ingresso.");
            router.push("/conta/login");
            return;
        }
        setComprando(true);
        try {
            const quantidade = cadeiras.length;
            const valor = quantidade * 25;
            const Ingresso = __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Object.extend("Ingresso");
            const ingresso = new Ingresso();
            ingresso.set("usuario", usuario);
            ingresso.set("filme", filme);
            ingresso.set("horario", horario);
            ingresso.set("cadeiras", cadeiras);
            ingresso.set("quantidade", quantidade);
            ingresso.set("valor", valor);
            const acl = new __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ACL(usuario);
            acl.setReadAccess(usuario, true);
            acl.setWriteAccess(usuario, false);
            ingresso.setACL(acl);
            await ingresso.save();
            const dadosCompra = {
                filme: filme,
                horario: horario,
                cadeiras: cadeiras,
                quantidade: quantidade,
                valor: valor
            };
            localStorage.setItem("compra", JSON.stringify(dadosCompra));
            router.push("/confirmacao");
        } catch (erro) {
            console.error("Erro ao salvar ingresso:", erro);
            alert("Não foi possível salvar a compra. Tente novamente.");
        } finally{
            setComprando(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pagina",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🎬"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            " CineMinha"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#filmes",
                                children: "Filmes"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#horarios",
                                children: "Horários"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#cadeiras",
                                children: "Cadeiras"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "botaoConta",
                                onClick: ()=>{
                                    const usuario = __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$lib$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].User.current();
                                    if (usuario) {
                                        router.push("/minha-conta");
                                    } else {
                                        router.push("/conta/login");
                                    }
                                },
                                children: "👤 Minha conta"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 149,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cineminha/app/page.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "subtitulo",
                            children: "BEM-VINDO AO CineMinha"
                        }, void 0, false, {
                            fileName: "[project]/cineminha/app/page.js",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: [
                                "Seu filme.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/cineminha/app/page.js",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                "Sua cadeira.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/cineminha/app/page.js",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                "Sua experiência."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/cineminha/app/page.js",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "descricao",
                            children: "Escolha seu filme, horário e suas cadeiras e garanta seus ingressos."
                        }, void 0, false, {
                            fileName: "[project]/cineminha/app/page.js",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#filmes",
                            className: "botaoHero",
                            children: "Comprar ingresso"
                        }, void 0, false, {
                            fileName: "[project]/cineminha/app/page.js",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/cineminha/app/page.js",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cineminha/app/page.js",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "conteudo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "filmes",
                        className: "secao",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Escolha seu filme"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "textoSecao",
                                children: "Selecione o filme que deseja assistir."
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filmes",
                                children: carregandoFilmes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Carregando filmes..."
                                }, void 0, false, {
                                    fileName: "[project]/cineminha/app/page.js",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this) : filmes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Nenhum filme disponível."
                                }, void 0, false, {
                                    fileName: "[project]/cineminha/app/page.js",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this) : filmes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `filme ${filme === item.nome ? "filmeSelecionado" : ""}`,
                                        onClick: ()=>setFilme(item.nome),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.imagem,
                                                alt: item.nome
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "filmeInfo",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: item.nome
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.genero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: item.genero
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    item.duracao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            item.duracao,
                                                            " minutos"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this),
                                                    item.classificacao && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: item.classificacao
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, this),
                                                    filme === item.nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "selecionado",
                                                        children: "✓ Selecionado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "horarios",
                        className: "secao",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Escolha o horário"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "textoSecao",
                                children: "Selecione um dos horários disponíveis."
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "horarios",
                                children: horarios.map((hora)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `horario ${horario === hora ? "horarioSelecionado" : ""}`,
                                        onClick: ()=>setHorario(hora),
                                        children: hora
                                    }, hora, false, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "cadeiras",
                        className: "secao",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Escolha suas cadeiras"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "textoSecao",
                                children: "Você pode selecionar mais de uma cadeira."
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cinema",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tela",
                                        children: "TELA"
                                    }, void 0, false, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "cadeiras",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fileira",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5,
                                                    6,
                                                    7,
                                                    8,
                                                    9,
                                                    10
                                                ].map((numero)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `cadeira ${cadeiras.includes(numero) ? "cadeiraSelecionada" : ""}`,
                                                        onClick: ()=>selecionarCadeira(numero),
                                                        children: numero
                                                    }, numero, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 282,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fileira",
                                                children: [
                                                    11,
                                                    12,
                                                    13,
                                                    14,
                                                    15,
                                                    16,
                                                    17,
                                                    18,
                                                    19,
                                                    20
                                                ].map((numero)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `cadeira ${cadeiras.includes(numero + 10) ? "cadeiraSelecionada" : ""}`,
                                                        onClick: ()=>selecionarCadeira(numero + 10),
                                                        children: numero
                                                    }, `segunda-${numero}`, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 298,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 281,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "legenda",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "quadrado disponivel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 316,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Disponível"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "quadrado selecionada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/cineminha/app/page.js",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Selecionada"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "resumo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Resumo da compra"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "resumoConteudo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Filme"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: filme || "Não selecionado"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Horário"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: horario || "Não selecionado"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cadeiras"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: cadeiras.length > 0 ? cadeiras.join(", ") : "Não selecionadas"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    "R$",
                                                    " ",
                                                    (cadeiras.length * 25).toFixed(2).replace(".", ",")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/cineminha/app/page.js",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/cineminha/app/page.js",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "botaoComprar",
                                onClick: comprarIngresso,
                                disabled: comprando,
                                children: comprando ? "Salvando compra..." : "Confirmar compra"
                            }, void 0, false, {
                                fileName: "[project]/cineminha/app/page.js",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/cineminha/app/page.js",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/cineminha/app/page.js",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "© 2026 CineMinha — Sistema de compra de ingressos"
                }, void 0, false, {
                    fileName: "[project]/cineminha/app/page.js",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/cineminha/app/page.js",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/cineminha/app/page.js",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(Home, "62uptYMVyZwsfEcSA4NZCb4sBh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$cineminha$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
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

//# sourceMappingURL=cineminha_1gpo4hx._.js.map