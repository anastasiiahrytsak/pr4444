const fs = require('fs'); 


const fileName = process.argv[2];
const content = process.argv[3];


if (!fileName || !content) {
    console.log(" Помилка! треба ввести: node app.js <назва> <текст>");
    process.exit(1); 
}


fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error(" Помилка при записі:", err);
        return;
    }
    console.log(` Файл "${fileName}" успішно створено!`);

   
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("Помилка при читанні:", error);
            return;
        }
        console.log(" Вміст файлу:", data);
    });
});


