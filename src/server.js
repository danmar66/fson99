import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';

const PORT = env(ENV_VARS.PORT, 3000);

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  const testFunc = (req, res, next) => {
    console.log('smth data');
    next();
  };

  app.use(
    ['/admin', '/products/edit', 'users/edit'],
    [
      testFunc,
      (req, res, next) => {
        console.log('\n\nauth middleware\n\n');
        next();
      },
    ],
  );

  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toISOString()}`);
    next();
  });

  app.get('/', (reqest, response) => {
    response.json({ message: 'Hello world' });
  });

  app.get(
    '/users',
    (req, res, next) => {
      const body = req.body;
      console.log('body: ', body);
      req.token = 'Smth new data ' + body.token;
      next();
    },
    (req, res) => {
      console.log(' changed req token', req.token);
      res.send('Users Collection');
    },
  );

  // Mожливість додати middleware безпосередньо в самому роуті
  app.get(
    '/books',
    (req, res, next) => {
      console.log('books middleware');
      next();
    },
    (req, res) => {
      res.send('<h2>Books page</h2>');
    },
  );

  app.get('/contacts', (req, res, next) => {
    return res.send('<h2>Contacts page</h2>');
    /*
    res.send('<h2>Contacts page</h2>');
    Якщо два рази зробите виклик res.send, то отримаєете помилку:
    Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    */
  });

  // Not Found middleware
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not Found!',
    });
  });

  // Error Handler
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
