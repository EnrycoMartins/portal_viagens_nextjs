# 🇰🇷 Portal de Viagens KR

Aplicação desenvolvida em Next.js que simula um pequeno portal de viagens focado em destinos turísticos da Coreia do Sul. O projeto foi criado como atividade de curso, com o objetivo de aplicar os conceitos de rotas baseadas em arquivos, rotas dinâmicas, componentização e estilização com CSS Modules.

## 📋 Sobre o projeto

O Portal de Viagens KR permite que o usuário:

- Veja uma apresentação inicial do portal na página `/`
- Acesse a listagem de destinos disponíveis na página `/destinos`
- Visualize detalhes de cada destino em uma página individual, através de rotas dinâmicas

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) para otimização de imagens

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
│   │   ├── page.tsx       → Listagem de destinos (/destinos)
│   │   └── [id]/
│   │       └── page.tsx   → Página de detalhes de um destino (/destinos/[id])
│   ├── layout.tsx         → Layout raiz (Header + Footer envolvendo as páginas)
│   ├── page.tsx           → Página inicial (/)
│   └── page.module.css
├── lib/
│   └── destino.ts         → Dados mockados dos destinos
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
| `/destinos/[id]`     | Página individual com detalhes de um destino específico |

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

## ✅ Requisitos atendidos

- [x] Projeto iniciado com `create-next-app`
- [x] Estrutura organizada (componentes, páginas e estilos separados)
- [x] Página inicial com apresentação e link para destinos
- [x] Página `/destinos` com listagem (mínimo 4 destinos)
- [x] Componente `Card` exibindo nome e imagem do destino
- [x] Componente `Layout` (Header + Footer) reutilizável em todas as páginas
- [x] Estilização com CSS Modules
- [x] Menu de navegação com `next/link`
- [x] Rotas dinâmicas para páginas individuais de destino

## 👤 Autor

Enryco Martins