import React from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/addBookForm';

const BooksPage = () => {
    return (
        <div>
            <h2>Book Library</h2>
            <AddBookForm />
            <BookList />
        </div>
    );
};

export default BooksPage;
