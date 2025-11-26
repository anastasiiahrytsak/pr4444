const fs = require("fs");

function countWordsStream(path) {
  let count = 0;

  const stream = fs.createReadStream(path, "utf8");

  stream.on("data", chunk => {
    const words = chunk.split(/\s+/);
    count += words.filter(Boolean).length;
  });

  stream.on("end", () => {
    console.log("Кількість слів у файлі:", count);
  });

  stream.on("error", err => {
    console.error("Помилка:", err.message);
  });
}

countWordsStream("text.txt");
