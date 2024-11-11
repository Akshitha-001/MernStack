import axios from 'axios'


const API = 'http://localhost:3000/products/all'

//ProjectEndPoints
const getProducts = () => axios.get(`${API}/products/all`)


const getOrders = () => axios.get(`${API}/orders/all`)



export {getProducts} 