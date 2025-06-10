

# 🛒 Sistema de Cadastro de Produtos com Autenticação

Este projeto é uma aplicação web desenvolvida com **Angular 20**, integrada a uma API REST criada com **NestJS**. O sistema permite autenticação via **JWT**, cadastro de produtos, associação dinâmica com usuários através de um **combo selector**, e exibição de alertas personalizados conforme ações do usuário.

---

## 🚀 Funcionalidades

* ✅ Login de usuários com autenticação JWT
* 🔐 Controle de níveis de acesso
* 👤 Exibição dos dados do usuário logado no cabeçalho
* 🔄 Combo dinâmico de usuários para associação nos cadastros
* 📝 Cadastro de produtos com vínculo ao `usuarioId`
* ⚠️ Alertas customizados de sucesso ou erro
* 🚪 Logout com limpeza automática da sessão

---

## 🧰 Tecnologias Utilizadas

| Camada          | Tecnologia              |
| --------------- | ----------------------- |
| Frontend        | Angular 20 + TypeScript |
| Estilização     | Bootstrap               |
| Backend (API)   | NestJS (via REST)       |
| Autenticação    | JWT                     |
| Armazenamento   | Session Storage         |
| Containerização | Docker + Docker Compose |

---

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── components/
│   │   ├── alert/
│   │   ├── header/
│   │   ├── sidebar/
│   ├── pages/
│   │   ├── login/
│   │   ├── cadastro-usuario/
│   │   ├── product-list/
│   │   ├── product-detail/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── product.service.ts
│   │   ├── http.service.ts
│   │   ├── cart.service.ts
│   │   └── auth.guard.ts
├── assets/
├── environments/
├── index.html
└── main.ts
```

---

## 💾 Requisitos

* Node.js `v18+`
* Angular CLI

  ```bash
  npm install -g @angular/cli
  ```
* Docker & Docker Compose

---

## 📦 Como Rodar o Projeto

### ✅ Executando com Docker

Certifique-se de que o Docker está instalado corretamente.

```bash
docker-compose build
docker-compose up
```

### 🧪 Executando Manualmente (sem Docker)

1. Clone o repositório:

   ```bash
   https://github.com/alisson-C-angular-php/carrinho_compras_frontend.git
   cd carrinho_compras_frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute a aplicação:

   ```bash
   ng serve
   ```

---

## 🔐 Estrutura de Autenticação

A autenticação é baseada em token JWT armazenado no `sessionStorage`. Exemplo de estrutura retornada pela API após login:

```json
{
  "message": "Login efetuado com sucesso",
  "user": {
    "id": 1,
    "email": "admin@email.com",
    "funcao": "Administrador"
  },
  "combo": [
    { "id": 1, "nome": "admin" },
    { "id": 2, "nome": "colaborador" }
  ],
  "token_acess": "eyJhbGciOiJIUzI1..."
}
```

---

## 📌 Observações Importantes

* Os produtos são vinculados ao `usuarioId` escolhido no combo após o login.
* Apenas usuários autenticados podem acessar rotas protegidas.
* Alertas exibem mensagens de sucesso ou erro baseadas nas ações.
* Os dados são limpos do `sessionStorage` no logout.

---

