import { url } from "./constants/settings.js";
import { renderDetails } from "./ui/renderDetails.js";
import createMenu from "./components/createmenu.js"; 

const productsUrl = url + "products";

async function getProducts() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        const products = json;

        renderDetails(products);
        createMenu();
 
       
    } catch (error) {
        console.log(error);
        
    }
}

getProducts();
