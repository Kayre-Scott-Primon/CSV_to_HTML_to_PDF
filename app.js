var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");
var Delete = require("./Delete");
var GetFiles = require("./GetFiles");

var leitor = new Reader();
var escritor = new Writer();
var deletar = new Delete();

async function main() {
  var files = GetFiles.GetFiles();

  files.forEach((file) => {
    if (file.includes(".html") || file.includes(".pdf")) {
      deletar.Delete(file);
    }
  });

  var dados = await leitor.Read("./users.csv");

  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);

  PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();
