# 🇰🇷 Portal de Viagens KR

Aplicação desenvolvida em Next.js que simula um pequeno portal de viagens focado em destinos turísticos da Coreia do Sul. O projeto foi criado como atividade de curso, com o objetivo de aplicar os conceitos de rotas baseadas em arquivos, rotas dinâmicas, componentização e estilização com CSS Modules.

## 📋 Sobre o projeto

O Portal de Viagens KR permite que o usuário:

- Veja uma apresentação inicial do portal na página `/`
- Acesse a listagem de destinos disponíveis na página `/destinos`

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## 📁 Estrutura de pastas

```
src/
├── app/
│   ├── components/
│   │   ├── Card/          → Card de destino (imagem, nome, descrição, preço)
│   │   ├── Footer/        → Rodapé, presente em todas as páginas
│   │   ├── Grid/          → Grid responsivo que organiza os Cards
│   │   ├── Header/        → Cabeçalho com menu de navegação (next/link)
│   │   └── Title/         → Componente de título reutilizável
│   ├── destinos/
│   │   └── page.tsx       → Listagem de destinos (/destinos)
│   ├── layout.tsx         → Layout raiz (Header + Footer envolvendo as páginas)
│   ├── page.tsx           → Página inicial (/)
│   └── page.module.css
├── lib/
│   └── destino.js         → Dados mockados dos destinos
├── styles/
│   └── globals.css
└── types/
    └── types.ts           → Tipagem (interface Viagem)
```

## 🗺️ Páginas e rotas

| Rota                | Descrição                                             |
|----------------------|--------------------------------------------------------|
| `/`                  | Apresentação do portal e link para a listagem          |
| `/destinos`          | Listagem de destinos turísticos (mínimo de 4)           |

## ▶️ Como rodar o projeto localmente

```bash
# clonar o repositório
git clone <url-do-repositorio>

# entrar na pasta do projeto
cd portal-viagem

# instalar as dependências
npm install

# rodar o servidor de desenvolvimento
npm run dev
```

Depois é só acessar [http://localhost:3000](http://localhost:3000) no navegador.

## 👤 Autor

Enryco Martins