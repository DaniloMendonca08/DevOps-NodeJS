const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<html><body><h1>Implantação efetuada com sucesso. Bom trabalho!</h1></body></html>');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
