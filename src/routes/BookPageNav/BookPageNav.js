import React, {Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../../components/CircleButton/CircleButton'
import BookContext from '../../contexts/BookContext'
import BookApiService from '../../services/books-api-service'

export default class BookPageNav extends Component {
    static contextType = BookContext
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    componentDidMount() {
        const bookId = this.props.match.params;
        BookApiService.getById(bookId)
            .then(this.context.setBook)
        
    }

    
    render() {
        const { book } = this.context
        return (
            <div className='BookPageNav'>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={()=>this.props.history.goBack()}
                    className='BookPageNav__back-button'
                >
                    <FontAwesomeIcon icon='chevron-left' />
                    <br />
                    Back
                </CircleButton>
                {book && (
                    <h3 className='BookPageNav__book-name'>
                        {book.book_name}
                    </h3>
                )}
            </div>
        )
    }
}