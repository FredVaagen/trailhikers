import { getExisitingCartItems} from "../utils/cartFunctions.js" ;

const cartItems = getExisitingCartItems(); 

const container = document.querySelector(".details-container")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

    export function renderDetails(json) {

        for (let i = 0; i < json.length; i++) {
        
            if(productId == json[i].id) {
                //const productImage = `http://localhost:1337${json[i].image.formats.small.url}`;
                const image = json[i].image_url;
                container.innerHTML +=
                `<div class="row">
                <div class="col-sm ">
                  <img class="detailsImage mb-3 img-fluid" src="${image}" alt="Product Name" />
                </div>
                <div class="col-md product-details">
                  <h2 class="detailsName">${json[i].title}</h2>
                  <p class="price detailsPrice">$${json[i].price}</p>
                  <p class="detailsDescription">${json[i].description}</p>
                  <p class="btn btn-primary buy-now" data-id="${json[i].id}" data-title="${json[i].title}" data-price="${json[i].price}" data-logo="${image}">ADD TO CART</p>
                  <p class="added-to-cart-message"></P>
                  </div>
              </div>`
            }
       
        }

    const addToCart = document.querySelectorAll(".buy-now");
    const addedToCartMessage = document.querySelector(".added-to-cart-message")

    addToCart.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
       const id = this.dataset.id;
       const title = this.dataset.title;
       const logo = this.dataset.logo;
       const price = this.dataset.price;
       
       addedToCartMessage.innerHTML = `${title} has been added to the cart!`;
       

      const currentCartItems = getExisitingCartItems();
        const productInfoExist = currentCartItems.find(function(cart) {
            return cart.id === id; 
            
        });

        if(productInfoExist === undefined) {
            const productDetails = { id: id, title: title, logo: logo, price: price};
            currentCartItems.push(productDetails);
            saveProduct(currentCartItems);   
        } 
    }

    function saveProduct(product) {
        localStorage.setItem("cart", JSON.stringify(product));
      
    }

}   