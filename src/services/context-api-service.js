import config from '../config'

const ContentApiService = {
    getContent() {
        return fetch(`${config.API_ENDPOINT}/content`, {
            method: 'GET',
            header: {}
        }).then(res => {
            if(!res.ok) {
                return e => Promise.reject(e)
            }
            return res.json();
        })
    },
    getById(id) {
        return fetch(`${config.API_ENDPOINT}/content/${id}`, {
            headers: {}
        }).then(res => {
            if (!res.ok) {
                return e => Promise.reject(e);
            }
            return res.json();
        })
    },
    deleteContent(id) {
        return fetch(`${config.API_ENDPOINT}/content/${id}`, {
            headers: {}
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(() => {
                this.context.deleteContent(id)
            })
            .catch(err => {
                console.error({ err })
            })
    }

}

export default ContentApiService