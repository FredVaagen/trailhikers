import { getUsername } from "../utils/storage.js";
import logoutButton from "../login/components/logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = `<a href="/cart.html" class="${pathname === "cart.html" ? "active" : ""}"><i class="fas fa-shopping-cart mr-1"></i>cart</a>
                    <a href="/login.html" class="${pathname === "login.html" ? "active" : ""}">Login</a>`;

    if (username) {
        authLink = `<a href="/cart.html" class="${pathname === "cart.html" ? "active" : ""}"><i class="fas fa-shopping-cart mr-1"></i>cart</a>
                    <a href="add.html" class="${pathname === "add.html" ? "active" : ""}">Add Product</a>
                    <a href="productsEdit.html" class="${pathname === "productsEdit.html" ? "active" : ""}">Edit Products</a>
                    <button id="logout">Logout ${username}</button>`;
    }

    container.innerHTML = `<div class="menu"> ${authLink}</div>`;

    logoutButton();
}


