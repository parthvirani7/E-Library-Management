import React from 'react';
import { borrowBook, returnBook } from '../services/bookService';

const BookItem = ({ book }) => {
    const handleBorrow = () => {
        borrowBook(book._id).then(() => {
            alert(`You borrowed ${book.title}`);
        });
    };

    const handleReturn = () => {
        returnBook(book._id).then(() => {
            alert(`You returned ${book.title}`);
        });
    };

    return (
        <li>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.publicationDate.split('T')[0]}</p>
            {book.isBorrowed ? (
                <button onClick={handleReturn}>Return Book</button>
            ) : (
                <button onClick={handleBorrow}>Borrow Book</button>
            )}
        </li>
    );
};

export default BookItem;
