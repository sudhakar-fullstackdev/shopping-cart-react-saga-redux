import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

export const fetchProductsAPI = () =>
  axios.get(`${BASE_URL}/products`).then((res) => res.data)
