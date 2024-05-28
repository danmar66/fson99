/*
------------------------- process() -------------------------
*/

/*
process.argv   -- аргументи запуску
process.env    -- перелік всіх змінних оточення
process.exit() -- завершення процесу NodeJS
process.cwd()  -- поточна діректорія
*/

process.on('uncaughtException', (err) => {
  console.error('SMTH HAPPEND! HELP: ', err.code);
  process.exit(1);
});

process.on('warning', (warning) => {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});

/*
------------------------- booksController -------------------------
*/

import { booksController } from './controllers/index.js';

const logAsyncResult = async (cb) => console.log(await cb);

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'getAll': {
      logAsyncResult(booksController.getAll());
      break;
    }
    case 'getById': {
      logAsyncResult(booksController.getById(id));
      break;
    }
    case 'add': {
      logAsyncResult(booksController.add({ title, author }));
      break;
    }
    case 'update': {
      logAsyncResult(booksController.update(id, { title, author}));
      break;
    }
    case 'remove': {
      logAsyncResult(booksController.remove(id));
      break;
    }
    case 'default': {
      console.log('Unknown action');
      break;
    }
  }
};

invokeAction({action: 'getAll'});
