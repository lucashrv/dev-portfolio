import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

export const metadata: Metadata = {
  title: "Lucas Henrique | Desenvolvedor Full-Stack",
  description:
    "Portfólio profissional de Lucas Henrique. Desenvolvedor Full-Stack com experiência em React, Next.js, Node.js, Express, PostgreSQL, Sequelize e TypeScript.",
  keywords: [
    "Lucas Henrique",
    "Desenvolvedor Full-Stack",
    "Front-End Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Recife",
    "Portfólio",
  ],
  authors: [{ name: "Lucas Henrique" }],
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#0b0b12] text-slate-900 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
