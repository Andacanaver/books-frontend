import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookContext from '../../contexts/BookContext'
import ContextApiService from '../../services/context-api-service'


export default class Content extends Component {
    static contextType = BookContext
    static defaultProps = {
        onDeleteContent: () => {}
    }
    handleClickDelete = e => {
        e.preventDefault() 
        const contentId = this.props.id

        ContextApiService.deleteContent(contentId)
            
    }
    render() {
        const { id, title, plot } = this.props
        return (
            <div className='Content'>
                <h2 className='Content__title'>
                    <Link to={`/content/${id}`}>
                        {title}
                    </Link>
                </h2>
                <button
                    className='Content__delete'
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    <FontAwesomeIcon icon='trash-alt' />
                    {'  '}
                    delete
                </button>
                <div className='Content__plot'>
                    {plot}
                </div>
            </div>
        )
    }
}