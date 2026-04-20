import express from 'express';
import { JSONFilePreset } from 'lowdb/node';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json()); 


const defaultData = { users: [] };
const db = await JSONFilePreset('db.json', defaultData);


app.post('/register', async (req, res) => {
  const { username, password } = req.body;


  const userExists = db.data.users.find(u => u.username === username);
  if (userExists) return res.status(400).send("Користувач вже існує");


  const hashedPassword = await bcrypt.hash(password, 10);

 
  const newUser = { username, password: hashedPassword };
  db.data.users.push(newUser);
  await db.write();

  res.status(201).send("Користувача зареєстровано!");
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = db.data.users.find(u => u.username === username);
  if (!user) return res.status(404).send("Користувача не знайдено");


  const isMatch = await bcrypt.compare(password, user.password);
  
  if (isMatch) {
    res.send("✅ Вхід успішний! Тут можна видати JWT токен.");
  } else {
    res.status(401).send("❌ Невірний пароль");
  }
});

app.listen(3000, () => console.log('Сервер запущено на http://localhost:3000'));