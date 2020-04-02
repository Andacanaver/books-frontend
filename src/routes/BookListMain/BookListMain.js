import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../../components/CircleButton/CircleButton'
import BookContext from '../../contexts/BookContext'
import Content from '../../components/Content/Content'
import { getContentForBook } from '../../helpers'
import BookApiService from '../../services/books-api-service'

export default class BookListMain extends Component {
    static contextType = BookContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    
    render() {
        const { book_id } = this.props.match.params
        const { content = [] } = this.context
        const contentForBook = getContentForBook(content, book_id)
        console.log(book_id)
        console.log(content)
        return (
            <section className='BookListMain'>
                <ul>
                    {content.map(con =>
                        <li key={con.id}>
                            <Content
                                id={con.id}
                                title={con.title}
                                plot={con.plot}
                            />
                        </li>    
                    )}
                </ul>
                <div className='BookListMain__button-container'>
                    <CircleButton
                        tag={Link}
                        to='/add-content'
                        type='button'
                        className='BookListMain__add-content'
                    >
                        <FontAwesomeIcon icon='plus' />
                        <br />
                        Content
                    </CircleButton>
                </div>
            </section>
        )
    }
}