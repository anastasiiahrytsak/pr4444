let name = "Анастасія";
let greeting = `Привіт, ${name}!`; 

console.log(greeting); 


let message = "JavaScript is cool!";
console.log("Довжина строки:", message.length);

console.log("Перший символ:", message[0]);
console.log("Останній символ:", message[message.length - 1]);

console.log(message.toUpperCase());
console.log(message.toLowerCase()); /

// 5. Пошук у строці
console.log("Чи є 'cool'?:", message.includes("cool")); 
console.log("Позиція 'Script':", message.indexOf("Script"));


let sliced = message.slice(0, 10);
console.log("Вирізано:", sliced);


let fixed = message.replace("cool", "awesome");
console.log(fixed);


let words = message.split(" "); 
console.log(words);
