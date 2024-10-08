const API_BASE_URL = 'http://localhost:4000/books';

export const getBooks = async () => {
    const response = await fetch(`${API_BASE_URL}`);
    return response.json();
};

export const addBook = async (bookData) => {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    });
    return response.json();
};

export const borrowBook = async (bookId) => {
    const response = await fetch(`${API_BASE_URL}/${bookId}/borrow`, {
        method: 'PATCH',
    });
    return response.json();
};

export const returnBook = async (bookId) => {
    const response = await fetch(`${API_BASE_URL}/${bookId}/return`, {
        method: 'PATCH',
    });
    return response.json();
};

export const getBorrowedBooks = async () => {
    const response = await fetch(`${API_BASE_URL}/borrowed`);
    return response.json();
};
