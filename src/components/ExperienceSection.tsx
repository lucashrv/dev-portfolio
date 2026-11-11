"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Estagiário em Desenvolvimento Back-End",
      company: "Compass UOL",
      period: "Dez 2024 — Maio 2025",
      type: "Estágio",
      location: "Remoto",
      description:
        "Desenvolvimento de aplicações e microsserviços back-end escaláveis para soluções de e-commerce corporativas.",
      highlights: [
        "Desenvolvimento de APIs com Node.js, NestJS e TypeScript com foco em alta concorrência",
        "Integração com serviços externos críticos: Google Maps API, Melhor Envio e ViaCEP",
        "Implementação de cálculo de rotas e estimativas de frete em tempo real",
        "Criação de suítes de testes automatizados unitários e de integração utilizando Jest",
        "Aplicação contínua dos princípios de Clean Code, SOLID e práticas ágeis (Scrum)",
        "Vivência com nuvem AWS e esteiras de versionamento com Git",
      ],
      techStack: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Jest",
        "AWS",
        "Google Maps API",
        "Melhor Envio",
        "Scrum",
      ],
    },
    {
      role: "Desenvolvedor Front-End",
      company: "HighEasy (Projeto Mundo Limpo — ASA Indústria)",
      period: "Abril 2023 — Agosto 2023",
      type: "Contrato / Projeto",
      location: "Recife, PE",
      description:
        "Desenvolvimento da interface web e geolocalização para plataforma de logística reversa e sustentabilidade da ASA Indústria.",
      highlights: [
        "Início da arquitetura front-end e gerenciamento de estado global com React e Redux",
        "Desenvolvimento de painéis interativos integrados diretamente à Google Maps API",
        "Criação de biblioteca de componentes reutilizáveis e responsivos com Styled-Components e Material-UI",
        "Desenvolvimento de CRUDs completos e consumo de APIs REST com alta usabilidade",
      ],
      techStack: [
        "React",
        "Redux",
        "Google Maps API",
        "Styled-Components",
        "Material-UI",
        "REST API",
      ],
    },
    {
      role: "Estagiário em Desenvolvimento Front-End",
      company: "Partec (Softex Pernambuco)",
      period: "Setembro 2022 — Junho 2023",
      type: "Estágio",
      location: "Recife, PE",
      description:
        "Criação de telas e componentes modulares no ecossistema Softex, referência em formação de tecnologia.",
      highlights: [
        "Desenvolvimento de telas e componentes reutilizáveis utilizando React.js e JavaScript moderno",
        "Criação e manutenção de operações CRUD no front-end conectadas a APIs REST",
        "Criação de interfaces responsivas e acessíveis com Styled-Components e Material-UI",
        "Resolução de bugs e melhorias contínuas de usabilidade e performance de renderização",
      ],
      techStack: [
        "React",
        "JavaScript (ES6+)",
        "CRUDs",
        "Material-UI",
        "Styled-Components",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50/50 dark:bg-[#0e0e18]/60 border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajetória Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiência{" "}
            <span className="text-brand-500">Profissional & Formação</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Histórico em empresas de tecnologia, projetos comerciais e
            qualificação acadêmica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-brand-500" />
              Experiências no Mercado
            </h3>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-white dark:bg-[#151525] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800/90 hover:border-brand-500/60 transition-all shadow-sm hover:shadow-lg space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((item, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Education Box */}
            <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-brand-500" />
                <span>Formação Acadêmica</span>
              </div>
              <div className="border-l-2 border-brand-500 pl-4 space-y-1">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Bacharelado em Sistemas de Informação
                </h4>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
                  UNINASSAU (Centro Universitário Maurício de Nassau)
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Conclusão: Julho de 2026
                </p>
              </div>
            </div>

            {/* Certifications Box */}
            <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                <Award className="w-5 h-5 text-brand-500" />
                <span>Certificações Oficiais</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  AWS Certified Cloud Practitioner
                </h4>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  Código do Exame: CLF-C02
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Amazon Web Services • Validação de competências essenciais em
                  arquitetura em nuvem, segurança e serviços gerenciados AWS.
                </p>
              </div>
            </div>

            {/* Languages & Soft Skills Box */}
            <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800/90 shadow-sm space-y-4">
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Idiomas & Competências Ágeis
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    <span>Inglês</span>
                    <span className="text-brand-500">Intermediário</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Leitura, escrita e escuta.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Destaques Comportamentais
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      Boa Comunicação
                    </span>
                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      Trabalho em Equipe
                    </span>
                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      Foco em Aprender Rápido
                    </span>
                    <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      Resolução de Problemas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-900/30 to-purple-900/20 p-6 rounded-2xl border border-brand-500/30 text-center space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Baixe o currículo completo
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Baixe a versão em PDF.
              </p>
              <a
                href="/assets/lucas-henrique-cv.pdf"
                download="Lucas-Henrique-Rocha-Vieira-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-md active:scale-95"
              >
                <span>Download CV em PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
