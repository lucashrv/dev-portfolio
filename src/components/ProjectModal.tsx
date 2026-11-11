"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on ESC key and handle body scroll lock
  useEffect(() => {
    if (!project) return;
    setActiveImageIndex(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || project.images[0];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#151526] rounded-2xl border border-slate-200 dark:border-brand-500/30 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#121220]/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Detalhes Completos do Projeto
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-brand-600 dark:text-brand-400 font-semibold">
              {project.subtitle}
            </p>
          </div>

          {/* Photo Gallery Viewer */}
          <div className="space-y-3">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center group">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain sm:object-cover transition-transform duration-300"
              />

              {/* Prev / Next buttons if multiple images */}
              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Foto anterior"
                    className="absolute left-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Próxima foto"
                    className="absolute right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Caption Tag */}
              {currentImage.caption && (
                <div className="absolute bottom-2 left-2 right-2 text-center text-xs text-white/90 bg-black/60 backdrop-blur-md py-1 px-3 rounded-lg">
                  {currentImage.caption}
                </div>
              )}
            </div>

            {/* Thumbnail Selectors if multiple images */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? "border-brand-500 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Recruiter Evaluation Highlight */}
          {project.recruiterNotes && (
            <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800/60 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-brand-900 dark:text-brand-200">
                  Visão do Recrutador / Valor Técnico
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-brand-800 dark:text-brand-300 leading-relaxed">
                  {project.recruiterNotes}
                </p>
              </div>
            </div>
          )}

          {/* Full Description */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-500" />
              Sobre a Solução Desenvolvida
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Key Features / Achievements */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Principais Funcionalidades & Entregas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#121220]/90">
          <div className="flex items-center gap-3">
            {project.linkLive && project.linkLive !== "#" && (
              <a
                href={project.linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-md transition-all active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Projeto Online</span>
              </a>
            )}

            {project.linkCode && project.linkCode !== "#" && (
              <a
                href={project.linkCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-800 dark:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Código no GitHub</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors ml-auto"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
