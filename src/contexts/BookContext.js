import React, { Component } from 'react';

const BookContext = React.createContext({
    books: [],
    content: [],
    error: null,
    book: [],
    addBook: () => {},
    deleteBook: () => {},
    setBooks: () => {},
    setError: () => {},
    clearError: () => {},
    setContent: () => {},
    clearContent: () => {},
    setBook: () => {},
    clearBook: () => {}
})

export default BookContext;

export class BookProvider extends Component {
    state = {
        books: [],
        content: [],
        error: null,
        book: []
    }

    setBooks = books => {
        this.setState({books})
    }

    addBook = book => {
        this.setState({
            books: [...this.state.books, book]
        })
    }

    deleteBook = () => {}

    setContent = content => {
        this.setState({content})
    }

    clearContent = () => {}

    setError = error => {
        this.setState({
            error
        })
    }
    clearError = () => {
        this.setState({
            error: null
        })
    }
    setBook = (book) => {
        this.setState({ book })
    }
    clearBook = () => {}

    render() {
        const value = {
            books: this.state.books,
            content: this.state.content,
            error: this.state.error,
            book: this.state.book,
            addBook: this.addBook,
            deleteBook: this.deleteBook,
            setBooks: this.setBooks,
            setError: this.setError,
            clearError: this.clearError,
            setContent: this.setContent,
            clearContent: this.clearContent,
            setBook: this.setBook,
            clearBook: this.clearBook
        }
        return (
            <BookContext.Provider value={value}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}