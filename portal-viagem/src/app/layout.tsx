import type { Metadata } from "next";
import "@/styles/globals.css"
import Footer from "./components/Footer";
import Header from "./components/Header";



export const metadata: Metadata = {
  title: "Portal de Viagens KR",
  description: "No portal de viagens KR, você encontra os melhores destinos turísticos da Coreia do Sul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
