import cors from 'cors';

const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'https://pagina-escuela-react-production.up.railway.app',
  'https://pagina-escuela-react.vercel.app',
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
  });
