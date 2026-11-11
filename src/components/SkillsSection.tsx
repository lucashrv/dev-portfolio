"use client";

import React, { useState } from "react";
import { allSkills, Skill } from "@/data/skills";
import { Code2, Server, Database, CheckCircle, Sparkles } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "Frontend",
    "Backend",
    "Database & Cloud",
    "Qualidade & Metodologias",
  ];

  const filteredSkills =
    activeCategory === "Todas"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stack Tecnológica & Domínio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Minhas <span className="text-brand-500">Habilidades Técnicas</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ferramentas, linguagens e frameworks que utilizo diariamente para
            construir produtos digitais de alta performance, seguros e
            escaláveis.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-[#151525] rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/60 dark:hover:border-brand-500/60 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Hexagon icon badge */}
                  <div className="w-14 h-16 bg-slate-100 dark:bg-[#1e1e34] clip-hexagon flex items-center justify-center group-hover:bg-brand-500/15 transition-colors">
                    <i
                      className={`${skill.deviconClass} text-3xl group-hover:scale-110 transition-transform`}
                    ></i>
                  </div>

                  {/* Proficiency badge */}
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      skill.proficiency === "Avançado"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{skill.category}</span>
                <span className="flex items-center gap-1 text-brand-500 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Produção
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-brand-950/40 via-purple-900/20 to-brand-950/40 rounded-2xl p-6 sm:p-8 border border-brand-500/30 text-slate-800 dark:text-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Front-End Elegante & Ágil
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Interfaces componentizadas, responsivas, acessíveis e com
                excelente usabilidade no React e Next.js.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Back-End Seguro & Escalável
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                APIs RESTful resilientes, controllers desacoplados, autenticação
                JWT e validação rigorosa de dados.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Bancos de Dados & DevOps
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Modelagem relacional consistente em PostgreSQL com migrations e
                queries otimizadas com ORMs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
