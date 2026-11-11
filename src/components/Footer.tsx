"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-brand-500/20 bg-slate-50 dark:bg-[#0d0d16] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-heading text-2xl font-bold text-brand-500">
            Lucas Henrique
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Desenvolvedor Full-Stack • Recife, Brasil
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            © {new Date().getFullYear()} Lucas Henrique. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            Desenvolvido com Next.js 14 & Tailwind CSS
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="p-2.5 rounded-xl bg-white dark:bg-[#181829] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:border-brand-500 transition-colors shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
