import { JSONFilePreset } from 'lowdb/node';
import bcrypt from 'bcryptjs';

async function main() {
 
  const defaultData = { users: [] };
  const db = await JSONFilePreset('db.json', defaultData);

  const passwordFromUser = "Ss2200gf";


  console.log("Реєстрація...");
  

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(passwordFromUser, saltRounds);

  const newUser = {
    username: "anastasialtxx",
    password: hashedPassword 
  };


  db.data.users.push(newUser);
  await db.write();
  console.log("Користувач збережений з хешем:", hashedPassword);

 
  console.log("\nСпроба входу...");
  

  const user = db.data.users.find(u => u.username === "anastasialtxx");

  if (user) {
   
    const isMatch = await bcrypt.compare("Ss2200gf", user.password);
    
    if (isMatch) {
      console.log("✅ Доступ дозволено! Пароль вірний.");
    } else {
      console.log("❌ Помилка: невірний пароль.");
    }
  }
}

main();