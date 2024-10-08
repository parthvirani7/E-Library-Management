import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';
import BookItem from './BookItem';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(setBooks);
    }, []);

    return (
        <div>
            <h2>Available Books</h2>
            <ul>
                {books.map((book) => (
                    <BookItem key={book._id} book={book} />
                ))}
            </ul>
        </div>
    );
};

export default BookList;
