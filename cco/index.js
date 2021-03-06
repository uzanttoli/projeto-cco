const express = require("express");
const app = express();
const path = require("path");
const mime = require("mime");
const fs = require("fs");
const readFilesRelatorios = require("./modules/readFiles.js");

app.set("view engine", "ejs");

app.use(express.static("public"));

var arquivos = [
  {
    title: "Scoreboard COMBO",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
  {
    title: "Scoreboard MTF",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
  {
    title: "Scoreboard MTF",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
  {
    title: "Scoreboard MTF",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
  {
    title: "Scoreboard MTF",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
  {
    title: "Scoreboard MTF",
    description: "Relatorio com medida operacional",
    size: "3M",
  },
];

app.get("/", (req, res) => {
  var nome = "Relatorios";
  res.render("index", {
    nome: nome,
    arquivos: arquivos,
  });
});

app.get("/teste", (req, res) => {
  res.send(readFilesRelatorios.lerArquivos());
});
app.get("/download", (req, res) => {
  //   var relatorios = req.params.relatorios;
  var relatorios = "teste.txt";
  var file = __dirname + "/download/" + relatorios;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader("Content-disposition", "attachment; filename=" + filename);
  res.setHeader("Content-type", mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Erro ao iniciar servidor");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
