import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { BookProvider } from './contexts/BookContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faChevronLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faChevronLeft, faTrashAlt)

ReactDOM.render(
  <BrowserRouter>
    <BookProvider>
      <App />
    </BookProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
