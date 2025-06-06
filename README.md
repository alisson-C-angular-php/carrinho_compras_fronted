# Sistema de Cadastro de Produtos com Autenticação

Este projeto é uma aplicação Angular com integração ao nest  via API REST. Ele permite o cadastro de produtos e a associação de usuários via `combo` (lista de usuários), com controle de autenticação e exibição dinâmica dos dados conforme o usuário logado.

## 🚀 Funcionalidades

- Login de usuários com token JWT
- Niveis de acesso
- Exibição de dados do usuário logado no cabeçalho
- Combo dinâmico de usuários para associação em cadastros
- Cadastro de produtos com vínculo ao `usuarioId`
- Exibição de alertas customizados para feedback
- Logout com limpeza de sessão

## 🧰 Tecnologias Utilizadas

- Angular 20
- TypeScript
- Bootstrap
- API REST (backend externo com nest.js)
- JWT para autenticação
- Session Storage para persistência temporária

## 📦 Estrutura do Projeto

```bash
src/
├── app/
│   ├── components/
│   │   ├── alert-component/
│   │   ├── header-component/
│   │   ├── side-bar-component/
│   ├── pages/
│   │   ├── login/
│   │   ├── cadastro-usuario/
│   │   ├── product-detail/
│   │   ├── product-list/
│   │   ├── product-detail/
│   ├── services/
│   │   └── product.service.ts
│   │   └── http.service.ts
│   │   └── cart.service.ts
│   │   └── auth.guard.ts
├── assets/
├── environments/
├── index.html
└── main.ts
