import { url } from "./constants/settings.js";
import { renderTrending } from './ui/renderTrending.js';
import createMenu from "./components/createmenu.js"; 
import heroBanner from "./heroBanner.js"


const productsUrl = url + "products";


async function getTrending() {
    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        const products = json;

        renderTrending (products)
        createMenu()
        heroBanner ()
    
    } catch (error) {
        console.log(error);
             
    }
}
getTrending();








