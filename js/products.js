import { url } from "./constants/settings.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import createMenu from "./components/createmenu.js"; 

const productsUrl = url + "products";

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        const products = json;

        renderProducts(products);
        searchProducts(products);
        createMenu();
       
    } catch (error) {
        console.log(error);
        
    }
}

getProducts();

