const args = process.argv.slice(2); 


if (args.length < 2) {
  console.error(" Помилка: Введіть ім'я та вік! (Приклад: node script.js Анастасія 17)");
  process.exit(1);
}

const [name, age] = args;

console.log(`Привіт, ${name}!`);

// Перетворюємо рядок на число для порівняння
if (Number(age) >= 18) {
  console.log(" Доступ дозволено: Ви вже дорослий програміст.");
} else {
  console.log(" Доступ обмежено");
}
