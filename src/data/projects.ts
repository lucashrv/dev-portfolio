export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Fullstack" | "Frontend" | "Backend";
  summary: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  linkLive?: string;
  linkCode?: string;
  featured?: boolean;
  recruiterNotes?: string;
}

export const allProjects: Project[] = [
  {
    id: "mundo-limpo-asa",
    title: "Projeto Mundo Limpo",
    subtitle: "ASA Indústria • Front-End & Google Maps API",
    category: "Frontend",
    summary:
      "Sistema comercial desenvolvido para a ASA Indústria focado em sustentabilidade e logística reversa, com geolocalização e integração à API do Google Maps.",
    description:
      "Atuação direta no desenvolvimento do front-end do Projeto Mundo Limpo para a ASA Indústria (grande grupo industrial brasileiro). Fiquei responsável por iniciar a arquitetura front-end em React e Redux, consumir e integrar APIs RESTful, e implementar mapas interativos com a Google Maps API para localização de pontos de coleta e reciclagem de óleo vegetal.",
    keyFeatures: [
      "Integração completa com a Google Maps JavaScript API para roteamento e marcação de ecopontos",
      "Gerenciamento de estado global previsível com React e Redux",
      "Criação e manutenção de CRUDs completos e interfaces responsivas",
      "Consumo de endpoints REST com tratamento avançado de estados de loading e erro",
      "Impacto social e ambiental focado em logística reversa e reciclagem"
    ],
    techStack: [
      "React",
      "Redux",
      "Google Maps API",
      "JavaScript (ES6+)",
      "REST API",
      "CSS3 / Bootstrap"
    ],
    images: [
      {
        src: "/img/mundo-limpo.svg",
        alt: "Mockup do Projeto Mundo Limpo - ASA Indústria",
        caption: "Plataforma de logística reversa e geolocalização de ecopontos com Google Maps API"
      }
    ],
    linkLive: "",
    linkCode: "https://github.com/lucashrv",
    featured: true,
    recruiterNotes:
      "Destaque Comercial: Projeto real entregue para a ASA Indústria. Demonstra experiência com integrações de terceiros de alta complexidade (Google Maps API) e desenvolvimento para grandes clientes."
  },
  {
    id: "dev-store",
    title: "Dev Store",
    subtitle: "E-Commerce Full-Stack com Catálogo e Upload de Mídia",
    category: "Fullstack",
    summary:
      "Aplicação de e-commerce completa inspirada em lojas virtuais modernas, com carrinho interativo, gestão de catálogo e upload de imagens via Multer.",
    description:
      "O Dev Store foi desenvolvido para simular uma experiência real de e-commerce, integrando frontend reativo com backend robusto. O sistema conta com catálogo filtrável por categorias, carrinho de compras com persistência, cálculo automático de frete/total, e área administrativa com upload dinâmico de produtos e imagens utilizando Multer.",
    keyFeatures: [
      "Catálogo dinâmico de produtos com busca e filtros em tempo real",
      "Carrinho de compras intuitivo com gerenciamento de estado e persistência",
      "Upload e manipulação de imagens multipart/form-data com Multer no backend",
      "Design 100% responsivo para mobile e desktop com alta performance",
      "Integração de APIs REST com tratamento avançado de erros e validação"
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Multer",
      "JavaScript (ES6+)",
      "CSS3 / Flexbox",
      "REST API"
    ],
    images: [
      {
        src: "/img/dev-store.png",
        alt: "Página inicial do Dev Store com vitrine de produtos",
        caption: "Interface principal com vitrine moderna e destaques"
      },
      {
        src: "/img/dev-store.png",
        alt: "Visualização detalhada do carrinho e catálogo",
        caption: "Fluxo ágil de navegação e adição ao carrinho"
      }
    ],
    linkLive: "https://dev-store-app.netlify.app/",
    linkCode: "https://github.com/lucashrv/dev-store/",
    featured: true,
    recruiterNotes:
      "Destaque: Demonstra domínio completo do ciclo Full-Stack, desde a estruturação de rotas de upload e controllers no Express até o consumo fluido de APIs no React."
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Enterprise",
    subtitle: "Plataforma de Comércio Eletrônico Escalável",
    category: "Fullstack",
    summary:
      "Arquitetura Full-Stack com React, Redux, Node.js, ORM Sequelize e banco relacional PostgreSQL para alta concorrência.",
    description:
      "Plataforma completa de vendas online estruturada com arquitetura limpa em camadas (Controllers, Services, Repositories). Utiliza Redux no frontend para fluxo de dados previsível, autenticação segura, e Sequelize ORM no backend mapeando entidades relacionais em PostgreSQL com transações atômicas para pagamentos e pedidos.",
    keyFeatures: [
      "Gerenciamento global de estado previsível via Redux / Redux Toolkit",
      "Modelagem de dados relacional complexa (Usuários, Pedidos, Itens, Estoque) com PostgreSQL",
      "Validação de schemas com tratativa robusta de exceções",
      "Fluxo de checkout e cálculo transacional consistente",
      "Arquitetura modular pronta para expansão e microsserviços"
    ],
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "JWT"
    ],
    images: [
      {
        src: "/img/ecommerce-platform.svg",
        alt: "Mockup do E-Commerce Enterprise",
        caption: "Arquitetura do sistema com Sequelize e PostgreSQL"
      }
    ],
    linkLive: "",
    linkCode: "https://github.com/lucashrv/ecommerce-front/",
    featured: true,
    recruiterNotes:
      "Destaque: Excelente modelagem de banco de dados relacional e controle rigoroso de integridade transacional."
  },
  {
    id: "finance-control",
    title: "Finance Control",
    subtitle: "Gestão Financeira Pessoal & Métricas",
    category: "Fullstack",
    summary:
      "Sistema de controle financeiro pessoal com dashboard de despesas/receitas, categorização, gráficos e persistência em banco relacional.",
    description:
      "Aplicação voltada para planejamento e organização financeira pessoal. Permite lançamentos de despesas e receitas, projeções mensais, relatórios por categoria e balanço em tempo real. O backend em Node.js com Express e PostgreSQL garante auditoria e precisão nos cálculos monetários.",
    keyFeatures: [
      "Dashboard analítico com resumos de receitas, despesas e saldo líquido",
      "Filtros temporais por mês, ano e categorias de gastos",
      "Controle de conciliação e relatórios de fluxo financeiro",
      "Banco estruturado em PostgreSQL com queries otimizadas",
      "Interface limpa que prioriza legibilidade e rapidez nos lançamentos"
    ],
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Bootstrap"
    ],
    images: [
      {
        src: "/img/finance-control.svg",
        alt: "Visão do Dashboard Financeiro",
        caption: "Painel de controle financeiro e resumos de gastos"
      }
    ],
    linkLive: "",
    linkCode: "https://github.com/lucashrv/finance-front",
    featured: false,
    recruiterNotes:
      "Destaque: Demonstra capacidade de transformar regras de negócio e cálculos financeiros em uma interface simples e clara."
  },
  {
    id: "portfolio-nextjs",
    title: "Dev Portfolio Next.js",
    subtitle: "Portfólio Moderno de Alto Desempenho",
    category: "Frontend",
    summary:
      "Portfólio reformulado em Next.js 14, TypeScript e Tailwind CSS com busca instantânea, paginação dinâmica e modal interativo para recrutadores.",
    description:
      "Refatoração completa da versão original legada em HTML/CSS/JS para uma Stack moderna com React Server Components, TypeScript estrito, estilização utilitária com Tailwind CSS, modo escuro/claro, filtros instantâneos e modal de detalhes técnicos focado em clareza para recrutadores de tecnologia.",
    keyFeatures: [
      "Desenvolvido com Next.js 14 App Router e TypeScript",
      "Busca em tempo real e paginação configurável fluida",
      "Modal com galeria de capturas, detalhes técnicos e notas para recrutadores",
      "100% responsivo, acessível e otimizado com Core Web Vitals elevados",
      "Modo escuro e claro integrado com persistência"
    ],
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons"
    ],
    images: [
      {
        src: "/img/perfil.png",
        alt: "Captura do portfólio Lucas Henrique",
        caption: "Design moderno focado em legibilidade e experiência do usuário"
      }
    ],
    linkLive: "#",
    linkCode: "https://github.com/lucashrv",
    featured: true,
    recruiterNotes:
      "Destaque: Demonstra código limpo, componentização inteligente, tipagem estrita e foco no design system."
  },
  {
    id: "rest-api-backend",
    title: "API Backend Core",
    subtitle: "Arquitetura RESTful & Microsserviços",
    category: "Backend",
    summary:
      "API estruturada em Node.js e Express com autenticação JWT, validação de payload, ORM Sequelize e documentação de rotas.",
    description:
      "Backend construído com foco em escalabilidade, manutenibilidade e segurança. Implementa autenticação baseada em JWT com refresh tokens, middlewares de autorização baseados em papéis (RBAC), hash seguro de senhas com bcrypt, migrations e seeds com Sequelize, e cobertura de testes de integração.",
    keyFeatures: [
      "Autenticação e controle de sessão seguro com JWT e bcrypt",
      "Tratamento centralizado de erros com status codes semânticos",
      "Migrations e seeds versionadas para PostgreSQL",
      "Proteção com Helmet, CORS configurado e rate limiting",
      "Código desacoplado seguindo boas práticas de Clean Code"
    ],
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Bcrypt",
      "Docker"
    ],
    images: [
      {
        src: "/img/soon.png",
        alt: "Diagrama da arquitetura da API",
        caption: "Estrutura de controllers, middlewares e banco relacional"
      }
    ],
    linkLive: "",
    linkCode: "https://github.com/lucashrv",
    featured: false,
    recruiterNotes:
      "Destaque: Foco em padrões de segurança, escalabilidade de endpoints e integridade de dados."
  },
  {
    id: "task-kanban-board",
    title: "Dev Kanban Board",
    subtitle: "Gestão Ágil de Tarefas & Produtividade",
    category: "Frontend",
    summary:
      "Painel Kanban interativo para gerenciamento ágil de tarefas e sprints, com tags de prioridade e persistência de dados.",
    description:
      "Aplicação de produtividade criada para times de desenvolvimento acompanharem o ciclo de vida de tarefas (A Fazer, Em Andamento, Concluído). Oferece busca rápida, filtragem por tags de tecnologia, estimativa de horas e visualização clara de progresso.",
    keyFeatures: [
      "Organização em colunas com atualização dinâmica de status",
      "Filtragem por prioridade, responsável e tecnologia",
      "Feedback visual imediato e animações suaves de transição",
      "Design pensado para acessibilidade e navegação via teclado"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Local Storage / State",
      "Lucide Icons"
    ],
    images: [
      {
        src: "/img/soon.png",
        alt: "Quadro Kanban interativo",
        caption: "Visualização em cards com colunas dinâmicas"
      }
    ],
    linkLive: "",
    linkCode: "https://github.com/lucashrv",
    featured: false,
    recruiterNotes:
      "Destaque: Gestão de estados reativos no React e usabilidade limpa para fluxos de trabalho ágeis."
  }
];
