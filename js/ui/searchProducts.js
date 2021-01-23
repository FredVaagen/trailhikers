import { renderProducts } from "./renderProducts.js";

export function searchProducts (products) {
    const searchbar = document.querySelector(".search");

    searchbar.onkeyup = function (event) {
        
        const searchValue = event.target.value.trim().toLowerCase(); 

        const findProduct = products.filter(function (product) {
                if ( product.title.toLowerCase().includes(searchValue)) {
                    return true;
                } 
        });

        renderProducts(findProduct);
    };
    
}





