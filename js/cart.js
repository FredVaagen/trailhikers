import { getExisitingCartItems} from "./utils/cartFunctions.js";
import createMenu from "./components/createmenu.js"; 

createMenu();

const cartItems = getExisitingCartItems(); 
const container = document.querySelector(".trending-container"); 
const totalPrice = document.querySelector(".cart__total"); 
const checkout = document.querySelector(".cart__checkout");

function renderCart () {

cartItems.forEach((cart) => {
 
    container.innerHTML +=  
                                `<div class="row cart__row">
                                <div class="col">
                                <a href="details.html?id=${cart.id}">
                                <img src=${cart.logo} class="img-fluid cart__image">
                                </a>
                                </div>
                                <a href="details.html?id=${cart.id}">
                                <div class="col-6">
                                <p>${cart.title}</p> <p>$${cart.price}</p></a>
                                </div>
                                <div class="col">
                                <i class="fas fa-times cart__i " data-id="${cart.id}"></i>
                                </div>
                            </div>`;    
                        }); 

                    
                        if (cartItems == "") {
                            container.innerHTML += ` <div class="no-products container mt-5">Empty cart</div>`
                            checkout.style.display = "none";
                        };

                        // TOTAL PRICE
                        
                        var sum = 0;

                        for(let i = 0; i < cartItems.length; i++){
                          let productPrice = [cartItems[i].price];
                          let totalPrice = productPrice.reduce((total,current)=>{
                            total += +current;
                            return total;
                          },0);
                          sum += totalPrice;
                        }
                        
                        if(sum != 0) {
                          totalPrice.innerHTML = "Total:" + " " + "$" + sum;

                        }};

                        renderCart ()
                        
                        const addToCart = document.querySelectorAll("i");
                        
                        addToCart.forEach((RemoveButton) => {
                          RemoveButton.addEventListener("click", handleClick);
                        });

                        function handleClick() {
                           const id = this.dataset.id;
                           const currentCartItems = getExisitingCartItems();
                            
                           const newCart = currentCartItems.filter((cart) => cart.id !== id);
                            saveProduct(newCart);

                            location.reload();
                          }  

                        function saveProduct(product) {
                            localStorage.setItem("cart", JSON.stringify(product));
                           
                        }

                       