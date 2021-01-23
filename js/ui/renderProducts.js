import { getExisitingCartItems} from "../utils/cartFunctions.js" ;

const cartItems = getExisitingCartItems(); 

const container = document.querySelector(".products-container");

export function renderProducts (getProducts) {
    container.innerHTML = "";


    getProducts.forEach(function(product) {

    

       // const image = `http://localhost:1337${product.image.formats.small.url}`;
        const image = product.image_url;

            container.innerHTML += 
            `<div class="col-sm d-flex justify-content-center mb-5">
            <a href="details.html?id=${product.id}">
                <div class="card" style="width: 16rem;">
                    <img src=${image} class="card-img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                                <p class="card-price">$${product.price}</p>
                                <p class="card-text">${product.description}</p></a>
                             </div>
                        </div>
                    </div> `
       })};   


