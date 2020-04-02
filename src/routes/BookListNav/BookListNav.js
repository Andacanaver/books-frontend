import React, {Component } from 'react'
import BookContext from '../../contexts/BookContext'
import { NavLink, Link } from 'react-router-dom'
import CircleButton from '../../components/CircleButton/CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BookListNav.css'
export default class BookListNav extends Component {
    static contextType = BookContext

    render() {
        const { books = [] } = this.context

        return (
            <div className='BookListNav'>
                <ul className='BookListNav__list'>
                    {books.map(book => 
                        <li key={book.id}>
                            <NavLink className='BookListNav__book-link' to={`/books/${book.id}`}>
                                {book.book_name}
                            </NavLink>
                        </li>    
                    )}
                </ul>
                <div className='BookListNav__button-wrapper'>
                    <CircleButton
                        tag={Link}
                        to='/add-book'
                        type='button'
                        className='BookListNav__add-book-button'
                    >
                        <FontAwesomeIcon icon='plus' />
                        <br/>
                        Book
                    </CircleButton>
                </div>
            </div>
        )
    }
}