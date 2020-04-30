import ProductService from '../services/ProductService/ProductAPI.api';
import CartStores from './CartStore/index.js';
import ProductStore from './ProductStore/index.js';
const productStore = new ProductStore(new ProductService());
const cartStore = new CartStores(productStore);
export default {productStore,cartStore};
