"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { allProjects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import {
  Search,
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  Sparkles,
  FolderGit2,
} from "lucide-react";

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const itemsPerPage = 3;

  const categories = ["Todos", "Fullstack", "Frontend", "Backend"];

  // Filter projects by search and category
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Todos" || project.category === selectedCategory;

      const term = searchTerm.trim().toLowerCase();
      if (!term) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(term) ||
        project.subtitle.toLowerCase().includes(term) ||
        project.summary.toLowerCase().includes(term) ||
        project.techStack.some((t) => t.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProjects = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, validCurrentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfólio & Casos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meus <span className="text-brand-500">Projetos em Destaque</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Clique em qualquer card para abrir o modal detalhado com galeria de
            telas, arquitetura, desafios solucionados e visão para recrutadores.
          </p>
        </div>

        {/* Search Bar & Category Filters Container */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Input Box */}
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Pesquisar projetos por título, descrição ou tecnologia (ex: React, PostgreSQL, Multer)..."
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white dark:bg-[#151525] border-2 border-slate-200 dark:border-slate-800 focus:border-brand-500 dark:focus:border-brand-500 text-slate-900 dark:text-white text-sm sm:text-base outline-none shadow-sm transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Limpar pesquisa"
                className="absolute right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categories and Results Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-500 text-white shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Counter */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Mostrando{" "}
              <strong className="text-brand-500 font-bold">
                {filteredProjects.length}
              </strong>{" "}
              {filteredProjects.length === 1 ? "projeto" : "projetos"}
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        {paginatedProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white dark:bg-[#151525] rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Nenhum projeto encontrado
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Não encontramos projetos correspondentes a &quot;{searchTerm}
              &quot;. Tente outros termos ou limpe o filtro.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
              className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all"
            >
              Ver Todos os Projetos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white dark:bg-[#161628] rounded-2xl border-2 border-slate-200 dark:border-slate-800/90 hover:border-brand-500 dark:hover:border-brand-500/80 shadow-md hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* Project Image Banner with Overlay */}
                <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                  <Image
                    src={project.images[0].src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500 text-white shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Pill */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-white backdrop-blur-sm shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>Destaque</span>
                    </div>
                  )}

                  {/* Hover prompt to open modal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-900/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4 text-brand-500" />
                      Ver Fotos & Detalhes
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detalhes</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.linkLive && project.linkLive !== "#" && (
                        <a
                          href={project.linkLive}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Ver Projeto Online"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.linkCode && project.linkCode !== "#" && (
                        <a
                          href={project.linkCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Código no GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#151525] p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              {/* First Page */}
              <button
                type="button"
                onClick={() => handlePageChange(1)}
                disabled={validCurrentPage === 1}
                aria-label="Primeira página"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Prev Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                aria-label="Página anterior"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Number Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  const isActive = page === validCurrentPage;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-105"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {page}
                    </button>
                  );
                },
              )}

              {/* Next Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                aria-label="Próxima página"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Last Page */}
              <button
                type="button"
                onClick={() => handlePageChange(totalPages)}
                disabled={validCurrentPage === totalPages}
                aria-label="Última página"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              Página {validCurrentPage} de {totalPages}
            </span>
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
