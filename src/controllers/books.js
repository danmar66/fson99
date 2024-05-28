import fs from 'node:fs/promises';
import path from 'node:path';
import { __dirname } from '../utils/index.js';

const filePath = path.join(__dirname, 'db/books.json');

const updateBooks = async (books) => {
  const updatedArray = await fs.writeFile(
    filePath,
    JSON.stringify(books, null, 2),
  );
  return updatedArray;
};

const getAll = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result;
};

const add = async ({ title, author }) => {
  const books = await getAll();
  const newBook = {
    id: '23',
    title,
    author,
  };
  books.push(newBook);
  updateBooks(books);
  return newBook;
};

const update = async (id, { title, author }) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) return null;
  books[index] = { id, title, author };
  updateBooks(books);
};

const remove = async (id) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const [result] = books.splice(index, 1);
  updateBooks(books);
  return result;
};

const bookController = {
  getAll,
  getById,
  update,
  add,
  remove,
};

export default bookController;
