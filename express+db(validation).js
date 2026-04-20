import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import { JSONFilePreset } from 'lowdb/node';

const app = express();
app.use(express.json());


const db = await JSONFilePreset('db.json', { users: [] });


const registerSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.min': "Ім'я занадто коротке (мін. 3 символи)",
      'any.required': "Ім'я користувача є обов'язковим"
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': "Введіть коректну адресу пошти"
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': "Пароль має бути не менше 6 символів"
    })
});


const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  
  if (error) {
  
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  
  next(); 
};


app.post('/register', validate(registerSchema), async (req, res) => {
  try {
    const { username, email, password } = req.body;


    const existingUser = db.data.users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Користувач з таким email вже існує" });
    }

  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = { 
      id: Date.now(), 
      username, 
      email, 
      password: hashedPassword 
    };
    
    db.data.users.push(newUser);
    await db.write();

    res.status(201).json({ 
      message: "Користувача створено", 
      userId: newUser.id 
    });

  } catch (err) {
    res.status(500).json({ error: "Помилка сервера" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер працює: http://localhost:${PORT}`);
});