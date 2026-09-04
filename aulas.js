const baseDeDados = [
    {
        id: "enem",
        nome: "ENEM",
        subcategorias: [
            {
                id: "enem-geral",
                nome: "Matriz ENEM",
                concursos: [
                    {
                        id: "enem-2026",
                        nome: "ENEM - Edital Geral",
                        disciplinas: [
                            {
                                id: "enem-mat",
                                nome: "Matemática e suas Tecnologias",
                                topicos: [
                                    { id: "e-1", titulo: "Razão e Proporção", youtubeId: "dQw4w9WgXcQ", descricao: "Proporção e regra de três.", material: "Sem material." },
                                    { id: "e-2", titulo: "Porcentagem e Juros", youtubeId: "dQw4w9WgXcQ", descricao: "Aplicações de porcentagem no ENEM.", material: "Sem material." }
                                ]
                            },
                            {
                                id: "enem-red",
                                nome: "Redação",
                                topicos: [
                                    { id: "e-3", titulo: "Tese e Argumentação", youtubeId: "dQw4w9WgXcQ", descricao: "Estrutura do texto dissertativo.", material: "Sem material." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "vestibulares",
        nome: "Vestibulares",
        subcategorias: [
            {
                id: "sp",
                nome: "São Paulo",
                concursos: [
                    {
                        id: "fuvest",
                        nome: "FUVEST (USP)",
                        disciplinas: [
                            {
                                id: "fuv-lit",
                                nome: "Literatura Brasileira",
                                topicos: [
                                    { id: "f-1", titulo: "Obras Obrigatórias: Romantismo", youtubeId: "dQw4w9WgXcQ", descricao: "Análise de obras da FUVEST.", material: "Sem material." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "concursos",
        nome: "Concursos Públicos",
        subcategorias: [
            {
                id: "conc-fund",
                nome: "Nível Fundamental",
                concursos: [
                    {
                        id: "pref-guarda",
                        nome: "Prefeituras (Guarda / Serviços)",
                        disciplinas: [
                            {
                                id: "fund-port",
                                nome: "Língua Portuguesa",
                                topicos: [
                                    { id: "f-port-1", titulo: "Ortografia Básica", youtubeId: "dQw4w9WgXcQ", descricao: "Regras ortográficas.", material: "Sem material." }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "conc-med",
                nome: "Nível Médio",
                concursos: [
                    {
                        id: "pm",
                        nome: "Polícia Militar (PM)",
                        disciplinas: [
                            {
                                id: "pm-port",
                                nome: "Língua Portuguesa",
                                topicos: [
                                    { id: "pm-1", titulo: "Crase na Prática", youtubeId: "dQw4w9WgXcQ", descricao: "Uso obrigatório e proibido da crase.", material: "Sem material." }
                                ]
                            },
                            {
                                id: "pm-dir",
                                nome: "Noções de Direito Constitucional",
                                topicos: [
                                    { id: "pm-3", titulo: "Artigo 5º - Direitos Individuais", youtubeId: "dQw4w9WgXcQ", descricao: "Direitos e garantias fundamentais.", material: "<a href='#'>Resumo em PDF</a>" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "conc-sup",
                nome: "Nível Superior",
                concursos: [
                    {
                        id: "pf-agente",
                        nome: "Polícia Federal (Agente)",
                        disciplinas: [
                            {
                                id: "pf-cont",
                                nome: "Contabilidade Geral",
                                topicos: [
                                    { id: "pf-c1", titulo: "Balanço Patrimonial", youtubeId: "dQw4w9WgXcQ", descricao: "Ativo, Passivo e Patrimônio Líquido.", material: "Sem material." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];