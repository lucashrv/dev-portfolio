"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, FileDown, ExternalLink } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0f0f18]/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-brand-500/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            className="group flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors"
          >
            <span className="font-heading text-brand-500 group-hover:text-brand-400 transition-colors">
              &lt;Lucas Henrique /&gt;
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-5 h-5 text-brand-600 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* CV Download Button */}
              <a
                href="/assets/lucas-henrique-cv.pdf"
                download="Lucas-Henrique-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-95 rounded-lg shadow-sm hover:shadow-brand-500/25 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Currículo</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-brand-600" />
              )}
            </button>

            {/* Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#121220]/95 backdrop-blur-lg border-b border-slate-200 dark:border-brand-500/30 px-6 py-6 transition-all shadow-xl">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="/assets/lucas-henrique-cv.pdf"
                download="Lucas-Henrique-CV.pdf"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-lg shadow-md transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
