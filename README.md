# Portfólio Profissional - Lucas Henrique (Next.js 14 & Tailwind CSS)

Portfólio moderno de alta performance desenvolvido para destacar competências Full-Stack, projetos práticos e experiência técnica para recrutadores e empresas de tecnologia.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/) & [Devicon](https://devicon.dev/)
- **Deploy:** Otimizado para Vercel, Netlify ou Node.js server

---

## ✨ Principais Melhorias Implementadas

1. **Refatoração Completa para Next.js 14**:
   - Arquitetura baseada em componentes reativos modulares (`Navbar`, `Hero`, `SkillsSection`, `ProjectsSection`, `ProjectModal`, `ContactSection`, `Footer`).
   - Gerenciamento de tema Dark/Light com persistência em `localStorage`.
   - Remoção dos arquivos estáticos legados (`index.html`, `index.js`, `style.css`) após a migração segura de todos os assets para `public/`.

2. **Busca e Paginação Aprimoradas**:
   - **Busca em tempo real**: pesquisa dinâmica por título, descrição, tecnologias e categoria.
   - **Filtros por categoria**: Todos, Fullstack, Frontend e Backend.
   - **Paginação moderna e acessível**: controles de primeira, anterior, números de página, próxima e última página.

3. **Cards Interativos com Modal para Recrutadores**:
   - Ao clicar em qualquer card (ou no botão "Detalhes"), abre-se um **Modal completo** contendo:
     - Galeria com fotos e capturas do projeto com navegação.
     - Descrição detalhada da solução e arquitetura técnica.
     - Lista de principais funcionalidades e entregas.
     - Tags completas de tecnologias.
     - **Destaque para o Recrutador**: explicação do impacto do projeto e domínio das ferramentas.
     - Links diretos para testar online (Live Demo) e acessar o repositório no GitHub.

4. **Legibilidade e Experiência do Recrutador**:
   - Contraste aprimorado, tipografia limpa (Nunito & Caveat), tags de status ("Disponível para contratação"), botões de cópia rápida para e-mail e WhatsApp com 1 clique, e download direto do CV em PDF.

---

## 🛠️ Como Executar o Projeto Localmente

```bash
# 1. Instalar dependências (caso necessário)
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# Acesse http://localhost:3000
```

### Build de Produção

```bash
npm run build
npm start
```
