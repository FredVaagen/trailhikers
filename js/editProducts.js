import { url } from "./constants/settings.js";
import createMenu from "./components/createmenu.js"; 
import { renderEditProducts } from './login/RenderEditProducts.js';

const productsUrl = url + "products";

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        const products = json;

        renderEditProducts(products);
     
        createMenu();
       
    } catch (error) {
        console.log(error);
        
    }
}

getProducts();

