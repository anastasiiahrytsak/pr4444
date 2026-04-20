import express from 'express';
import bcrypt from 'bcryptjs';
import { JSONFilePreset } from 'lowdb/node';


class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; 
  }
}

const app = express();
app.use(express.json());

const db = await JSONFilePreset('db.json', { users: [] });


const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); 
  };
};



app.post('/register', catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Будь ласка, заповніть усі поля', 400));
  }

  const existingUser = db.data.users.find(u => u.email === email);
  if (existingUser) {
    return next(new AppError('Цей email вже зайнятий', 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  db.data.users.push({ email, password: hashedPassword });
  await db.write();

  res.status(201).json({ status: 'success', message: 'User registered' });
}));


app.get('/broken', (req, res) => {
  throw new Error('! Щось зламалося в коді сервера!');
});


app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  
  console.error('ERROR 💥:', err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,

  });
});

app.listen(3000, () => console.log('Server with Error Handling on port 3000'));