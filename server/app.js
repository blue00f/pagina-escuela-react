import express, { json } from 'express';
import { postsRouter } from './routes/posts.js';
import { corsMiddleware } from './middlewares/cors.js';
import { loginRouter } from './routes/login.js';
import 'dotenv/config';

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable('x-powered-by');

app.use('/posts', postsRouter);
app.use('/login', loginRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
