# 🎬 CineMinha

# ALUNOS:
```text
Rosalvo Alves de Oliveira Filho  RA: 00000854909
Lucas Hudson Caxilé              RA: 00000853721
```

Sistema de cinema desenvolvido com **Next.js**, permitindo consultar filmes, escolher horários, selecionar cadeiras e realizar compras de ingressos.

O projeto também possui sistema de contas de usuário e uma área de gerenciamento de filmes integrada ao **Back4App**, além da integração com a **API do TMDB** para facilitar o cadastro de filmes.

---

## 📌 Sobre o projeto

O CineMinha foi desenvolvido como projeto acadêmico utilizando tecnologias de desenvolvimento web modernas.

O sistema simula o funcionamento de uma plataforma de cinema, permitindo que o usuário:

- Criar uma conta
- Fazer login
- Consultar filmes disponíveis
- Escolher um filme
- Escolher um horário
- Selecionar as cadeiras
- Finalizar uma compra
- Visualizar seus ingressos
- Acessar sua conta
- Sair da conta

Também existe uma área administrativa para gerenciamento dos filmes cadastrados.

---

## 🚀 Funcionalidades

### 👤 Sistema de usuários

- Cadastro de usuários
- Login
- Verificação de usuário autenticado
- Área "Minha Conta"
- Visualização dos dados da conta
- Logout

### 🎬 Filmes

- Listagem de filmes
- Cadastro de filmes
- Edição de filmes
- Exclusão de filmes
- Busca de filmes através da API do TMDB
- Armazenamento dos filmes no Back4App

### 🎟️ Ingressos

- Escolha do filme
- Escolha do horário
- Seleção de cadeiras
- Cálculo do valor do ingresso
- Confirmação da compra
- Visualização dos ingressos comprados

### 💾 Banco de dados

O projeto utiliza o **Back4App**, através do Parse SDK, para armazenar informações dos usuários e filmes.

---

## 🛠️ Tecnologias utilizadas

- **Next.js**
- **React**
- **JavaScript**
- **CSS**
- **Parse**
- **Back4App**
- **TMDB API**
- **Git**
- **GitHub**

---

## 📂 Estrutura do projeto

```text
cineminha/
│
├── app/
│   ├── conta/
│   │   └── login/
│   │
│   ├── minha-conta/
│   │
│   ├── meus-ingressos/
│   │
│   ├── cadastro-filme/
│   │
│   ├── editar-filme/
│   │
│   ├── confirmacao/
│   │
│   ├── page.js
│   ├── layout.js
│   └── globals.css
│
├── lib/
│   └── parse.js
│
├── public/
│   └── imagens e ícones
│
├── package.json
└── README.md
