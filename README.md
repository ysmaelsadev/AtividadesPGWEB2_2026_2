# Minha Estante

Aplicação web para gerenciar leituras pessoais, desenvolvida com Node.js, Express,
EJS, Tailwind CSS e arquitetura MVC. Os dados são persistidos em `livros.json`.

## Como executar

```bash
npm install
npm start
```

Depois, acesse `http://localhost:8080`.

Durante o desenvolvimento, também é possível usar `npm run dev` para reiniciar o
servidor automaticamente após alterações.

## Funcionalidades

- cadastro e listagem de livros;
- alternância entre os status **Lendo** e **Lido**;
- exclusão com confirmação;
- resumo com totais de livros, leituras concluídas e páginas lidas;
- validação dos dados no navegador e no servidor;
- interface responsiva e semântica.
