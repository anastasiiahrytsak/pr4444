const http = require('http');

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Це твій сервер.');
    } else if (req.url === '/error') {
      
      throw new Error("Ой! Щось зламалося на сервері.");
    } else {
      res.writeHead(404);
      res.end('Сторінку не знайдено');
    }
  } catch (err) {
  
    res.writeHead(500);
    res.end(`Помилка сервера: ${err.message}`);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});