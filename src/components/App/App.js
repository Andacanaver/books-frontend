import React, {Component} from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import BookContext from '../../contexts/BookContext'
import BookApiService from '../../services/books-api-service'
import BookListNav from '../../routes/BookListNav/BookListNav'
import BookPageNav from '../../routes/BookPageNav/BookPageNav'
import BookListMain from '../../routes/BookListMain/BookListMain'
import ContentApiService from '../../services/context-api-service'

class App extends Component {
  static contextType = BookContext;

  componentDidMount() {
    this.context.clearError();
    BookApiService.getBooks()
      .then(this.context.setBooks)
      .catch(this.context.setError);
    ContentApiService.getContent()
      .then(this.context.setContent)
      .catch(this.context.setError)
  }

  renderNavRoutes() {
    return(
      <>
        {['/', '/books/:book_id'].map(path => 
          <Route
            exact
            key={path}
            path={path}
            component={BookListNav}
          />
        )}
        
      </>  
    )
  }

  renderMainRoutes() {
    return(
      <>
        {['/', '/books/:book_id'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={BookListMain}
          />  
        )}
      </>
    )
  }
  render() {
    console.log(this.context.content)
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Books</Link>
          </h1>
        </header>
        <main className='App__main'>
          <div className='App_landing'>
            <h2>Click on a book to see it's contents.</h2>
            {this.renderMainRoutes()}
          </div>
        </main>
      </div>
    )
  }
}

export default App;
