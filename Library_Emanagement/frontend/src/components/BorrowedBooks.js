import React, { useEffect, useState } from 'react';
import { getBorrowedBooks } from '../services/bookService';

const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        getBorrowedBooks().then(setBorrowedBooks);
    }, []);

    return (
        <div>
            <h2>Borrowed Books</h2>
            {borrowedBooks.length > 0 ? (
                <ul>
                    {borrowedBooks.map((book) => (
                        <li key={book._id}>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.genre}</p>
                            <p>{book.publicationDate.split('T')[0]}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No borrowed books</p>
            )}
        </div>
    );
};

export default BorrowedBooks;
