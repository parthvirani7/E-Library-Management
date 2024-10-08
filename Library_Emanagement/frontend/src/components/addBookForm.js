import React, { useState } from 'react';
import { addBook } from '../services/bookService';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publicationDate, setPublicationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            genre,
            publicationDate,
        };

        addBook(newBook).then(() => {
            alert(`${title} has been added to the library!`);
            setTitle('');
            setAuthor('');
            setGenre('');
            setPublicationDate('');
        });
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={author}
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={genre}
                    placeholder="Genre"
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={publicationDate}
                    onChange={(e) => setPublicationDate(e.target.value)}
                    required
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;
