import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to E-Library</h1>
            <nav>
                <Link to="/books">Browse Books</Link>
                <Link to="/borrowed-books">Borrowed Books</Link>
            </nav>
        </div>
    );
};

export default HomePage;
