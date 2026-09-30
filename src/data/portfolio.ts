import type { Certification, EducationItem, Project } from '../types/content'

const whatsappMessage = encodeURIComponent(
  'Olá José, encontrei seu portfólio e gostaria de conversar sobre uma oportunidade.',
)

export const profile = {
  name: 'José Chilala Jacinto',
  github: 'https://github.com/josechilala',
  linkedin: 'https://www.linkedin.com/in/jose-chilala-jacinto-7ab14b115',
  whatsapp: `https://wa.me/5519982968338?text=${whatsappMessage}`,
  location: 'Hortolândia, SP · Brasil',
  photo: '/images/profile/jose-chilala.webp.jpg',
  resumeUrl: '/documents/curriculo-jose-chilala.pdf',
  email: 'josejacinto517@gmail.com',
  summary:
    'Mais de 6 anos em aplicações corporativas, conectando back-end .NET e interfaces React. Arquitetura de software, APIs e aprofundamento em IA aplicada.',
  about: [
    'Sou desenvolvedor Full Stack com mais de 6 anos no desenvolvimento e na evolução de aplicações corporativas. Atuo com C#, ASP.NET Core, React e Angular, da construção de APIs REST à integração entre sistemas e à modernização de legados.',
    'Na Senior Sistemas, trabalho com produtos empresariais e SaaS, aplicando Clean Architecture, SOLID, testes e entrega contínua. Meu foco está na estabilidade em produção e em soluções que possam evoluir com o negócio.',
    'Atualmente, aprofundo conhecimentos em IA generativa e integração de LLMs em aplicações .NET, incluindo Function Calling, RAG e agentes de IA.',
  ],
}

export const navigation = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#formacao', label: 'Formação' },
]

export const highlights = [
  { title: '6+ anos', text: 'Desenvolvimento e evolução de aplicações corporativas.' },
  { title: 'Full Stack', text: 'Back-end .NET, C#, React e APIs REST.' },
  { title: 'Arquitetura', text: 'Clean Architecture, SOLID e testes.' },
  { title: 'IA aplicada', text: 'Aprofundamento em LLMs, RAG e Function Calling.' },
]

export const skills = [
  {
    number: '01',
    title: 'Back-end',
    description: 'Construção de APIs REST, integração entre sistemas e modernização de aplicações legadas.',
    text: 'C# · .NET · ASP.NET Core · Web API · Node.js · Express · Fastify · MVC · APIs REST · Microserviços',
  },
  {
    number: '02',
    title: 'Front-end',
    description: 'Desenvolvimento e manutenção de interfaces web com React e Angular em aplicações corporativas.',
    text: 'React · Next.js · Angular · AngularJS · TypeScript · JavaScript · HTML5 · CSS3 · Bootstrap · Tailwind CSS',
  },
  {
    number: '03',
    title: 'Banco de Dados',
    description: 'Criação e otimização de procedures, queries e rotinas para aplicações de negócio.',
    text: 'SQL Server · PostgreSQL · Oracle · MySQL · MongoDB · Redis · Prisma ORM · Procedures e queries otimizadas',
  },
  {
    number: '04',
    title: 'Arquitetura & Qualidade',
    description: 'Organização de aplicações com Clean Architecture e SOLID, apoiada por testes e documentação.',
    text: 'Clean Architecture · Clean Code · SOLID · Design Patterns · Repository Pattern · Testes unitários, de integração e E2E',
  },
  {
    number: '05',
    title: 'DevOps & Cloud',
    description: 'Pipelines de build, testes e deploy; versionamento, homologação e entrega contínua.',
    text: 'Git · Docker · Docker Compose · Azure DevOps · GitLab CI/CD · GitHub Actions · Jenkins · Azure · AWS · Linux',
  },
  {
    number: '06',
    title: 'IA Aplicada',
    description: 'Estudos práticos de integração de LLMs em aplicações .NET e assistentes para sistemas corporativos.',
    text: 'APIs de LLMs · Engenharia de Prompt · Function Calling · RAG · Agentes de IA · Automação inteligente',
  },
]

export const experiences = [
  {
    company: 'Senior Sistemas',
    role: 'Desenvolvedor Full Stack',
    period: 'Jun/2021 – Atual',
    current: true,
    description:
      'Desenvolvimento e evolução de aplicações corporativas e produtos SaaS, com foco na modernização de legados e na estabilidade em produção.',
    responsibilities: [
      'APIs REST, integrações e microsserviços para conectar sistemas e evoluir serviços.',
      'Clean Architecture, SOLID, testes e entrega contínua aplicados à qualidade e manutenção dos produtos.',
    ],
    technologies: 'C# · ASP.NET Core · React · Angular · SQL Server · PostgreSQL · Oracle · Docker · Azure · GitLab CI/CD',
  },
  {
    company: 'JJ Suporte Técnico e Manutenção de Computadores',
    role: 'Desenvolvedor Full Stack',
    period: 'Mai/2019 – Jun/2021',
    current: false,
    description:
      'Aplicações web, APIs e soluções SaaS sob medida para necessidades de negócio e automação de processos.',
    responsibilities: [
      'Pipelines de build, testes e deploy com Azure DevOps; versionamento, pull requests e homologação.',
      'Clean Architecture e SOLID na organização de aplicações e manutenção das soluções.',
    ],
    technologies: 'Node.js · Express · React · TypeScript · PostgreSQL · Prisma ORM · Jest · Cypress · Docker · Azure DevOps',
  },
  {
    company: 'Stefanini',
    role: 'Analista de Sistemas',
    period: 'Fev/2020 – Mai/2021',
    current: false,
    description:
      'Suporte e manutenção de sistemas corporativos críticos para usuários da América Latina e Europa.',
    responsibilities: [
      'Diagnóstico de incidentes, instalação de sistemas, recuperação de dados e backup em ambientes corporativos.',
    ],
    technologies: 'Windows Server · SQL Server · Redes · Servidores · DataProtector · Suporte remoto',
  },
  {
    company: 'StarCorp',
    role: 'Programador Back-end',
    period: 'Abr/2017 – Fev/2019',
    current: false,
    description:
      'Desenvolvimento de sistemas de e-commerce em C#, com módulos de produtos, clientes e pedidos.',
    responsibilities: [
      'Novas funcionalidades, correções e integrações com sistemas internos.',
      'Criação e otimização de procedures, queries e rotinas de banco de dados.',
    ],
    technologies: 'C# · SQL Server · SQL · Stored Procedures · Integrações',
  },
]

export const education: EducationItem[] = [
  {
    level: 'Bacharelado',
    title: 'Sistemas de Informação',
    institution: 'UNASP Hortolândia',
    year: '2019',
    diplomaUrl: '/documents/education/graduacao-sistemas-informacao.pdf',
    diplomaLabel: 'Ver diploma',
  },
  {
    level: 'Pós-graduação',
    title: 'Engenharia de Software',
    institution: 'Faculdade Metropolitana',
    year: '2022',
    diplomaUrl: '/documents/education/pos-engenharia-software.pdf',
    diplomaLabel: 'Ver diploma',
  },
]

export const certifications: Certification[] = [
  {
    title: '.NET: um curso orientado para o mercado de trabalho',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/dotnet-mercado-trabalho.pdf',
    credentialUrl: 'https://ude.my/UC-a9043b7b-e95a-464f-b650-b07f65cf3979',
    skills: ['.NET', 'C#', 'ASP.NET'],
    featured: true,
  },
  {
    title: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/csharp-completo-poo.pdf',
    credentialUrl: 'https://ude.my/UC-b02fe3ab-6bf6-4475-a61a-1e40be3f18ed',
    skills: ['C#', 'POO'],
    featured: true,
  },
  {
    title: 'Clean Architecture Essencial - ASP .NET Core com C#',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/clean-architecture-aspnet-core-csharp.pdf',
    credentialUrl: 'https://ude.my/UC-b20c7f6c-0138-4d37-ae32-cd8f5eafa4fb',
    skills: ['ASP.NET Core', 'C#', 'Clean Architecture'],
    featured: true,
  },
  {
    title: 'Inteligência Artificial c .NET AI DeepSeek OpenAI e ChatGPT',
    issuer: 'Udemy',
    issueDate: '2026-08-16',
    certificateUrl: '/documents/certificates/ia-dotnet-deepseek-openai-chatgpt.pdf',
    credentialUrl: 'https://ude.my/UC-03109ce7-8630-46b4-9d91-7bca120b783b',
    skills: ['.NET', 'IA Generativa', 'OpenAI', 'LLMs'],
    featured: true,
  },
  {
    title: 'Curso de ASP.NET com C#',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/aspnet-csharp.pdf',
    credentialUrl: 'https://ude.my/UC-567ad026-7cb1-4b47-992e-d9e1a178230a',
    skills: ['.NET', 'ASP.NET', 'C#'],
    featured: false,
  },
  {
    title: 'Domine Apache Kafka, Fundamentos e Aplicações Reais',
    issuer: 'Udemy',
    issueDate: '2023-02-16',
    certificateUrl: '/documents/certificates/apache-kafka-fundamentos-aplicacoes.pdf',
    credentialUrl: 'https://ude.my/UC-56ca1c94-83a0-478a-b94c-34f6e1087e13',
    skills: ['Apache Kafka', 'Mensageria'],
    featured: false,
  },
  {
    title: 'Curso IA Inteligência Artificial + 12 Ferramentas BONUS',
    issuer: 'Udemy',
    issueDate: '2025-04-09',
    certificateUrl: '/documents/certificates/formacao-inteligencia-artificial.pdf',
    credentialUrl: 'https://ude.my/UC-2417d494-8a57-4e4e-ae84-6027989f7444',
    skills: ['Inteligência Artificial', 'IA Generativa'],
    featured: false,
  },
  {
    title: 'Gestão Ágil com Scrum COMPLETO + 3 Cursos EXTRAS',
    issuer: 'Udemy',
    issueDate: '2020-11-18',
    certificateUrl: '/documents/certificates/gestao-agil-scrum.pdf',
    credentialUrl: 'https://ude.my/UC-0e986a09-f502-4246-8938-7817d430f582',
    skills: ['Scrum', 'Métodos Ágeis'],
    featured: false,
  },
  {
    title: 'Java COMPLETO Programação Orientada a Objetos + Projetos',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/java-completo-poo.pdf',
    credentialUrl: 'https://ude.my/UC-e6bc8d7e-5bd1-4bfd-8bb3-1da4348f78d5',
    skills: ['Java', 'POO'],
    featured: false,
  },
  {
    title: 'JavaScript do básico ao avançado (c/ Node.js e projetos)',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/javascript-basico-avancado.pdf',
    credentialUrl: 'https://ude.my/UC-65d6d28e-c341-4ed0-94b8-4ff9ace5df3a',
    skills: ['JavaScript', 'Node.js'],
    featured: false,
  },
  {
    title: 'O curso completo de Banco de Dados e SQL, sem mistérios!',
    issuer: 'Udemy',
    issueDate: '2019-09-30',
    certificateUrl: '/documents/certificates/banco-dados-sql.pdf',
    credentialUrl: 'https://ude.my/UC-M89CTD67',
    skills: ['SQL', 'Banco de Dados'],
    featured: false,
  },
  {
    title: 'RabbitMQ: de A-Z com exemplos',
    issuer: 'Udemy',
    issueDate: '2022-10-12',
    certificateUrl: '/documents/certificates/rabbitmq-a-z.pdf',
    credentialUrl: 'https://ude.my/UC-32977fb5-e7e9-4d55-8e38-e87c6a95998a',
    skills: ['RabbitMQ', 'Mensageria'],
    featured: false,
  },
  {
    title: 'React Js do zero ao avançado na pratica',
    issuer: 'Udemy',
    issueDate: '2026-09-29',
    certificateUrl: '/documents/certificates/react-zero-avancado.pdf',
    credentialUrl: 'https://ude.my/UC-43d4dd43-ab11-46ce-8b41-f3af0febbaa6',
    skills: ['React', 'JavaScript'],
    featured: false,
  },
]

export const projects: Project[] = [
  {
    id: 'queueflow',
    featured: true,
    caseSections: [
      { title: 'Contexto do produto', text: 'Gestão de filas físicas e virtuais em uma plataforma SaaS multi-tenant.' },
      { title: 'Base tecnológica', text: 'ASP.NET Core Web API e C# no back-end; React / Next.js e TypeScript na interface. A stack inclui Entity Framework Core, PostgreSQL, SignalR, Redis e Docker.' },
      { title: 'Aplicação e site comercial', text: 'O QueueFlow reúne a aplicação SaaS e seu site comercial próprio em um único projeto.' },
    ],
    number: '01',
    name: 'QueueFlow',
    subtitle: 'Fluxo de Filas',
    category: 'SaaS · Multi-tenant',
    description:
      'Uma plataforma SaaS multi-tenant para o gerenciamento de filas físicas e virtuais.',
    technologies: [
      'ASP.NET Core Web API',
      'C#',
      'Entity Framework Core',
      'PostgreSQL',
      'React / Next.js',
      'TypeScript',
      'SignalR',
      'Redis',
      'Docker',
    ],
    repository: 'https://github.com/josechilala/QueueFlow',
    images: [
      {
        src: '/images/projects/queueflow/application/01-queueflow-display-publico.png',
        alt: 'Display público do QueueFlow com senha chamada, guichê e histórico das últimas chamadas.',
        caption: 'Display público — Senha chamada, guichê e histórico de chamadas.',
        category: 'application', order: 1, width: 1427, height: 801,
      },
      {
        src: '/images/projects/queueflow/application/02-queueflow-admin-agendamentos.png',
        alt: 'Área administrativa do QueueFlow com filtros por período, status, unidade e serviço e tabela de agendamentos.',
        caption: 'Gestão de agendamentos — Consulta e acompanhamento dos agendamentos na área administrativa.',
        category: 'application', order: 2, width: 1399, height: 811,
      },
      {
        src: '/images/projects/queueflow/application/03-queueflow-painel-atendente.png',
        alt: 'Painel do atendente do QueueFlow com seleção de unidade, fila e guichê e área do ticket em atendimento.',
        caption: 'Painel do atendente — Seleção de fila e guichê para conduzir os atendimentos.',
        category: 'application', order: 3, width: 1403, height: 806,
      },
      {
        src: '/images/projects/queueflow/application/04-queueflow-agendamento-cliente.png',
        alt: 'Página pública de agendamento do QueueFlow com seleção de data e horários disponíveis para o cliente.',
        caption: 'Agendamento online — Consulta de disponibilidade e escolha de horário pelo cliente.',
        category: 'application', order: 4, width: 1055, height: 811,
      },
      {
        src: '/images/projects/queueflow/commercial/01-queueflow-home.png',
        alt: 'Página inicial do site comercial do QueueFlow com apresentação do produto e demonstração do display de chamadas.',
        caption: 'Página inicial — Proposta de valor e apresentação dos principais fluxos do QueueFlow.',
        category: 'commercial', order: 5, width: 1412, height: 774,
      },
      {
        src: '/images/projects/queueflow/commercial/02-queueflow-fluxo-atendimento.png',
        alt: 'Site comercial do QueueFlow com etapas de cliente, fila ou agendamento, check-in, atendente, display e conclusão.',
        caption: 'Fluxo de atendimento — Da entrada do cliente à conclusão do atendimento.',
        category: 'commercial', order: 6, width: 1408, height: 753,
      },
      {
        src: '/images/projects/queueflow/commercial/03-queueflow-recursos.png',
        alt: 'Seção de recursos do QueueFlow com filas digitais, agendamento online, painel do atendente, display e gestão de unidades.',
        caption: 'Recursos da plataforma — Visão geral das ferramentas de filas, agendamentos e atendimento.',
        category: 'commercial', order: 7, width: 1381, height: 725,
      },
    ],
  },
  {
    id: 'webapp-compras',
    caseSections: [
      { title: 'Contexto', text: 'Compra assistida para mercados locais, conectando a lista do cliente à compra e à entrega.' },
      { title: 'Jornada do produto', text: 'O cliente envia a lista e escolhe o mercado. Um comprador-entregador verificado realiza a compra e a entrega.' },
    ],
    number: '02',
    name: 'WebApp Compras',
    subtitle: 'Compra Assistida',
    category: 'Plataforma · Comércio local',
    description:
      'O cliente envia sua lista, escolhe o mercado e um comprador-entregador verificado realiza a compra e a entrega. Uma plataforma de compra assistida para mercados locais.',
    technologies: [],
    repository: 'https://github.com/josechilala/WebApp_Compras',
    images: [
      {
        src: '/images/projects/webapp-compras/01-webapp-compras-home.png',
        alt: 'Página inicial do WebApp Compras, com visão geral da plataforma, proposta do serviço e acesso aos mercados e produtos.',
        caption: 'Página inicial — Visão geral da plataforma, proposta do serviço e acesso aos mercados e produtos.',
        order: 1,
        width: 1242,
        height: 631,
      },
      {
        src: '/images/projects/webapp-compras/02-webapp-compras-mercados.png',
        alt: 'Tela de mercados do WebApp Compras, com consulta aos mercados disponíveis e acesso aos detalhes e produtos.',
        caption: 'Mercados — Consulta e gerenciamento dos mercados disponíveis, com acesso aos detalhes e produtos.',
        order: 2,
        width: 1264,
        height: 585,
      },
      {
        src: '/images/projects/webapp-compras/03-webapp-compras-criar-conta.png',
        alt: 'Tela de cadastro de cliente do WebApp Compras, com campos para informações pessoais e endereço.',
        caption: 'Cadastro de cliente — Fluxo de criação de conta com informações pessoais e endereço.',
        order: 3,
        width: 1340,
        height: 635,
      },
    ],
  },
  {
    id: 'actdigital',
    caseSections: [
      { title: 'Desafio técnico', text: 'Representar crédito, débito, consulta de saldo e histórico, com uma regra de domínio que impede saldo negativo.' },
      { title: 'Solução arquitetural', text: 'Clean Architecture, SOLID e Clean Code orientam a API. A implementação usa repositório em memória thread-safe e inclui testes.' },
      { title: 'API e interface', text: '.NET Minimal API com OpenAPI e um cliente React / Vite associado ao projeto.' },
    ],
    number: '03',
    name: 'ActDigital.Account.Api',
    subtitle: 'Movimentações de Conta',
    category: 'API · Arquitetura de software',
    description:
      'Crédito, débito, saldo e histórico em uma API com domínio protegendo saldo não negativo, repositório em memória thread-safe e testes. Inclui cliente React/Vite.',
    technologies: [
      '.NET Minimal API',
      'OpenAPI',
      'Clean Architecture',
      'SOLID',
      'Clean Code',
      'React / Vite',
    ],
    repository: 'https://github.com/josechilala/ActDigital.Account.Api',
    images: [
      {
        src: '/images/projects/actdigital/01-actdigital-movimentacoes.png',
        alt: 'Tela da ActDigital Account com saldo de R$ 700,00 e movimentações de crédito e débito.',
        caption: 'Movimentações da conta — crédito, débito, saldo e histórico.',
        order: 1,
        width: 1176,
        height: 621,
      },
      {
        src: '/images/projects/actdigital/02-actdigital-swagger-api.png',
        alt: 'Documentação Swagger/OpenAPI da ActDigital.Account.Api exibindo os endpoints de saldo e movimentações.',
        caption: 'API REST documentada com Swagger/OpenAPI.',
        order: 2,
        width: 1330,
        height: 624,
      },
      {
        src: '/images/projects/actdigital/03-actdigital-conta-inicial.png',
        alt: 'Tela inicial da ActDigital Account com saldo de R$ 0,00 e nenhuma movimentação.',
        caption: 'Estado inicial da conta antes das movimentações.',
        order: 3,
        width: 1109,
        height: 505,
      },
    ],
  },
]
