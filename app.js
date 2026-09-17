import express from "express";
import livroRoutes from "./routes/livroRoutes.js";

const app = express();
const PORTA = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { tituloPagina: "Início" });
});

app.use("/livros", livroRoutes);

app.use((req, res) => {
  res.status(404).render("404", { tituloPagina: "Página não encontrada" });
});

app.listen(PORTA, () => {
  console.log(`Minha Estante está disponível em http://localhost:${PORTA}`);
});

