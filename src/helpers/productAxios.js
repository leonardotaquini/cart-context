import axios from "axios"
const baseURL = 'https://fakestoreapi.com/products';
export const getProducts = async() => {
    try {
        const products = await axios.get(baseURL);
        return products.data;
    } catch (error) {
        console.log(error);
    }
}