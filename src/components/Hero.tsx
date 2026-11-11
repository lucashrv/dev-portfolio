"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FileDown,
  ArrowRight,
  MapPin,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const typingPhrases = [
  "Desenvolvedor Full-Stack",
  "React, Next.js & TypeScript",
  "Node.js, NestJS & APIs REST",
  "PostgreSQL, MongoDB & AWS Cloud",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Recruiter Presentation */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para novas oportunidades e contratação!
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400">
              Olá, boas-vindas! Eu me chamo
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Lucas <span className="text-brand-500">Henrique</span>
            </h1>
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-500 to-purple-400 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="w-1 h-7 sm:h-8 ml-1 bg-brand-500 animate-blink"></span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Desenvolvedor <strong>Full-Stack</strong> graduado em Sistemas de
            Informação (UNINASSAU), residente em Recife/PE. Experiência sólida
            em{" "}
            <strong>
              React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, MongoDB e
              Docker
            </strong>
            . Vivência no desenvolvimento de microsserviços, consumo e
            construção de APIs RESTful, testes com <strong>Jest</strong> e
            certificação{" "}
            <strong className="text-brand-500">
              AWS Certified Cloud Practitioner
            </strong>
            .
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>Recife, PE</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <Briefcase className="w-4 h-4 text-brand-500" />
              <span>Full-Stack</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-brand-500" />
              <span>AWS Certified</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="/assets/lucas-henrique-cv.pdf"
              download="Lucas-Henrique-Rocha-Vieira-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 active:scale-95 rounded-xl shadow-lg shadow-brand-500/25 transition-all"
            >
              <FileDown className="w-5 h-5" />
              <span>Download CV</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-xl border border-slate-300 dark:border-slate-700 transition-all"
            >
              <span>Explorar Projetos</span>
              <ArrowRight className="w-4 h-4 text-brand-500" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Conecte-se:
            </span>
            <a
              href="https://github.com/lucashrv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-brand-500 text-slate-700 dark:text-slate-300 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
              title="GitHub de Lucas Henrique"
            >
              <i className="devicon-github-original text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-hrv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-brand-500 text-[#0077b5] hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
              title="LinkedIn de Lucas Henrique"
            >
              <i className="devicon-linkedin-plain text-2xl colored"></i>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-700 group-hover:scale-105"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-brand-500/80 shadow-2xl bg-gradient-to-b from-brand-900/30 to-brand-950/60 flex items-center justify-center">
              <Image
                src="/img/perfil.png"
                alt="Lucas Henrique - Desenvolvedor Full-Stack"
                width={384}
                height={384}
                priority
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-3 -right-2 sm:right-4 bg-white/95 dark:bg-[#161628]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-brand-500/40 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Foco Principal
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-white">
                  Full-Stack Moderno
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
