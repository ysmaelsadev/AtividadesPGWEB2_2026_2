import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const diretorioAtual = path.dirname(fileURLToPath(import.meta.url));
const caminhoArquivo = path.join(diretorioAtual, "..", "livros.json");

export function carregaLivros() {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
    const livros = JSON.parse(conteudo);

    return Array.isArray(livros) ? livros : [];
  } catch (erro) {
    console.error("Não foi possível carregar os livros:", erro.message);
    return [];
  }
}

export function salvarLivros(livros) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(livros, null, 2), "utf-8");
}

export function adicionarLivro(novoLivro) {
  const livros = carregaLivros();
  livros.push(novoLivro);
  salvarLivros(livros);
}

export function alterarStatus(indice) {
  const livros = carregaLivros();

  if (!Number.isInteger(indice) || !livros[indice]) {
    return false;
  }

  livros[indice].status = livros[indice].status === "Lido" ? "Lendo" : "Lido";
  salvarLivros(livros);
  return true;
}

export function removerLivro(indice) {
  const livros = carregaLivros();

  if (!Number.isInteger(indice) || !livros[indice]) {
    return false;
  }

  livros.splice(indice, 1);
  salvarLivros(livros);
  return true;
}

