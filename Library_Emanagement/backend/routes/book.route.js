const express = require('express');
const {
  createBook, getBooks, updateBook, deleteBook,
  borrowBook, returnBook
} = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/books',authMiddleware, createBook);
router.get('/books', getBooks);
router.put('/books/:id', authMiddleware, updateBook);
router.delete('/books/:id', authMiddleware, deleteBook);
router.post('/books/:id/borrow', authMiddleware, borrowBook);
router.post('/books/:id/return', authMiddleware, returnBook);

module.exports = router;
