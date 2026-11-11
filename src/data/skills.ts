export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database & Cloud" | "Qualidade & Metodologias";
  deviconClass: string;
  description: string;
  proficiency: "Avançado" | "Intermediário" | "Sólido";
}

export const allSkills: Skill[] = [
  // Front-End
  {
    name: "React.js",
    category: "Frontend",
    deviconClass: "devicon-react-original colored",
    description: "Componentes funcionais, Hooks, Context API, Redux, Performance e arquitetura limpa.",
    proficiency: "Avançado"
  },
  {
    name: "Next.js",
    category: "Frontend",
    deviconClass: "devicon-nextjs-original-wordmark colored",
    description: "App Router, SSR, SSG, Server Components e otimização de SEO.",
    proficiency: "Avançado"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    deviconClass: "devicon-typescript-plain colored",
    description: "Tipagem estrita, interfaces, generics e código defensivo escalável.",
    proficiency: "Avançado"
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    deviconClass: "devicon-javascript-plain colored",
    description: "Assincronismo (Promises, async/await), DOM, closures e boas práticas modernas.",
    proficiency: "Avançado"
  },
  {
    name: "Redux",
    category: "Frontend",
    deviconClass: "devicon-redux-original colored",
    description: "Gerenciamento global de estado previsível com Redux e Redux Toolkit.",
    proficiency: "Avançado"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    deviconClass: "devicon-tailwindcss-plain colored",
    description: "Design systems utilitários rápidos, responsivos e customizados.",
    proficiency: "Avançado"
  },
  {
    name: "Styled-Components & Material-UI",
    category: "Frontend",
    deviconClass: "devicon-materialui-plain colored",
    description: "Componentes reutilizáveis, CSS-in-JS e Design Systems acessíveis.",
    proficiency: "Sólido"
  },

  // Back-End
  {
    name: "Node.js",
    category: "Backend",
    deviconClass: "devicon-nodejs-plain colored",
    description: "Desenvolvimento de APIs RESTful escaláveis, microsserviços e scripts assíncronos.",
    proficiency: "Avançado"
  },
  {
    name: "NestJS",
    category: "Backend",
    deviconClass: "devicon-nestjs-plain colored",
    description: "Arquitetura corporativa escalável com injeção de dependência, módulos, guards e DTOs.",
    proficiency: "Avançado"
  },
  {
    name: "Express.js",
    category: "Backend",
    deviconClass: "devicon-express-original",
    description: "Roteamento, middlewares de segurança, autenticação JWT e integrações de APIs.",
    proficiency: "Avançado"
  },
  {
    name: "Clean Code & SOLID",
    category: "Backend",
    deviconClass: "devicon-code-plain",
    description: "Princípios arquiteturais sólidos, desacoplamento e padrões de projeto corporativos.",
    proficiency: "Avançado"
  },

  // Database & Cloud
  {
    name: "PostgreSQL",
    category: "Database & Cloud",
    deviconClass: "devicon-postgresql-plain colored",
    description: "Modelagem relacional, consultas SQL estruturadas, índices e integridade referencial.",
    proficiency: "Avançado"
  },
  {
    name: "MongoDB",
    category: "Database & Cloud",
    deviconClass: "devicon-mongodb-plain colored",
    description: "Bancos NoSQL baseados em documentos, agregações e modelagem com Mongoose.",
    proficiency: "Sólido"
  },
  {
    name: "Prisma ORM & Sequelize",
    category: "Database & Cloud",
    deviconClass: "devicon-sequelize-plain colored",
    description: "Mapeamento objeto-relacional, migrations versionadas e queries otimizadas.",
    proficiency: "Avançado"
  },
  {
    name: "AWS Cloud",
    category: "Database & Cloud",
    deviconClass: "devicon-amazonwebservices-original colored",
    description: "AWS Certified Cloud Practitioner (CLF-C02), EC2, S3, IAM e computação em nuvem.",
    proficiency: "Sólido"
  },
  {
    name: "Docker",
    category: "Database & Cloud",
    deviconClass: "devicon-docker-plain colored",
    description: "Containerização de ambientes, Dockerfile, Docker Compose e orquestração básica.",
    proficiency: "Sólido"
  },

  // Qualidade & Metodologias
  {
    name: "Jest (Testes Automatizados)",
    category: "Qualidade & Metodologias",
    deviconClass: "devicon-jest-plain colored",
    description: "Testes unitários e de integração, TDD, mocks de serviços externos e cobertura de código.",
    proficiency: "Avançado"
  },
  {
    name: "Git & GitHub",
    category: "Qualidade & Metodologias",
    deviconClass: "devicon-git-plain colored",
    description: "Versionamento de código, Git Flow, Pull Requests, Code Review e CI/CD.",
    proficiency: "Avançado"
  },
  {
    name: "Scrum & Metodologias Ágeis",
    category: "Qualidade & Metodologias",
    deviconClass: "devicon-trello-plain colored",
    description: "Sprints, dailies, retrospectivas e atuação integrada em squads multidisciplinares.",
    proficiency: "Avançado"
  }
];
