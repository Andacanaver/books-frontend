import config from '../config'

const BooksApiService = {
    getBooks() {
        return fetch(`${config.API_ENDPOINT}/books`, {
            headers: {}
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        });
    },
    getById(id) {
        return fetch(`${config.API_ENDPOINT}/books/${id}`, {
            headers: {}
        }).then(res => {
            if(!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        })
    },
    getContent(bookId) {
        return fetch(`${config.API_ENDPOINT}/books/${bookId}/content`, {
            headers: {}
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        })
    }
}

export default BooksApiService