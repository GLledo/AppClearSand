import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/comment`,
            withCredentials: true
        })
    }

    postComment = comment => this.service.post(`/new-comment`, comment).then(response => response.data)
    
}
