import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/beach',
            withCredentials: true
        })
    }

    getFiveBeaches = () => this.service.get('/getFiveBeaches').then(response => response.data)
    getBeachDetails = id => this.service.get(`/getOneBeach/${id}`).then(response => response.data)
}