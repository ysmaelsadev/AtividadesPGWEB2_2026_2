import * as livroModel from "../models/livroModel.js";

export function listar(req, res) {
  const livros = livroModel.carregaLivros();
  const resumo = {
    total: livros.length,
    lidos: livros.filter((livro) => livro.status === "Lido").length,
    paginasLidas: livros
      .filter((livro) => livro.status === "Lido")
      .reduce((total, livro) => total + Number(livro.paginas || 0), 0),
  };

  res.render("principal", { tituloPagina: "Meus Livros", livros, resumo });
}

export function formNovo(req, res) {
  res.render("novoLivro", {
    tituloPagina: "Cadastrar Livro",
    erro: null,
    dados: {},
  });
}

export function criar(req, res) {
  const titulo = req.body.titulo?.trim();
  const autor = req.body.autor?.trim();
  const paginas = Number(req.body.paginas);

  if (!titulo || !autor || !Number.isInteger(paginas) || paginas < 1) {
    return res.status(400).render("novoLivro", {
      tituloPagina: "Cadastrar Livro",
      erro: "Preencha todos os campos corretamente.",
      dados: req.body,
    });
  }

  livroModel.adicionarLivro({ titulo, autor, paginas, status: "Lendo" });
  return res.redirect("/livros");
}

export function alterarStatus(req, res) {
  const indice = Number(req.params.indice);
  livroModel.alterarStatus(indice);
  res.redirect("/livros");
}

export function remover(req, res) {
  const indice = Number(req.params.indice);
  livroModel.removerLivro(indice);
  res.redirect("/livros");
}

