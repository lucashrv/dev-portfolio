"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lucas.hrv@outlook.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+5581995458629");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Vamos Conversar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Entre em <span className="text-brand-500">Contato Comigo</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Estou disponível para novas oportunidades de contratação Full-Stack
            ou Front-End, parcerias e projetos desafiadores.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* LinkedIn Card */}
          <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center justify-between group">
            <div className="w-16 h-16 rounded-full bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                LinkedIn
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                @lucas-hrv
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/lucas-hrv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0077b5] hover:bg-[#006097] transition-all w-full justify-center"
            >
              <span>Acessar Perfil</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center justify-between group">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                GitHub
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                @lucashrv
              </p>
            </div>
            <a
              href="https://github.com/lucashrv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 transition-all w-full justify-center"
            >
              <span>Ver Repositórios</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center justify-between group">
            <div className="w-16 h-16 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                E-mail
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
                lucas.hrv@outlook.com
              </p>
            </div>
            <div className="flex items-center gap-2 w-full">
              <a
                href="mailto:lucas.hrv@outlook.com"
                className="flex-1 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all justify-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Copiar e-mail"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="bg-white dark:bg-[#151525] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center justify-between group">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <div className="space-y-1 mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                WhatsApp & Tel
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                +55 (81) 99545-8629
              </p>
            </div>
            <div className="flex items-center gap-2 w-full">
              <a
                href="https://wa.me/5581995458629?text=Ol%C3%A1%20Lucas,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all justify-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Mensagem</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Copiar número de telefone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Recruiter Availability Callout */}
        <div className="mt-12 max-w-2xl mx-auto p-6 rounded-2xl bg-slate-50 dark:bg-[#121222] border border-slate-200 dark:border-brand-500/20 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400">
            <Sparkles className="w-4 h-4" />
            <span>Pronto para iniciar</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Aceito propostas formatos CLT ou PJ. Sinta-se à vontade para me
            contatar a qualquer momento!
          </p>
        </div>
      </div>
    </section>
  );
}
