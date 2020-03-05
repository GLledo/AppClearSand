import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/beach`,
            withCredentials: true
        })
    }

    getFiveBeaches = () => this.service.get('/getFiveBeaches').then(response => response.data)
    getBeachDetails = id => this.service.get(`/getOneBeach/${id}`).then(response => response.data)
}