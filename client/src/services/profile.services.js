 
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })
    }

    getUserEdit = id => this.service.get(`/edit-user/${id}`).then(response => response.data)
    postUserEdit = id => this.service.post(`/edit-user/${id}`).then(response => response.data)
    getUser = () => this.service.get('/').then(response => response.data)
}