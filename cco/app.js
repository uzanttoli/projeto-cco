var Reader = require("./modules/Read");
var Processor = require("./modules/Processor");
var Table = require("./modules/Table");
var HtmlParser = require("./modules/HtmlParser");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./teste.txt");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);
  console.log(html);
}

main();
