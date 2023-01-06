import axios from "axios";

const BASE_URL ="http://localhost:8000/api";

export const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products/`)
    return response.data
}