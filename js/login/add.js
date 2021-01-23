import displayMessage from "../ui/displayMessage.js";
import createMenu from "../components/createmenu.js";
import { getToken } from "../utils/storage.js";
import { url } from "../constants/settings.js";

createMenu();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#imageUrl");
const message = document.querySelector(".message-container");
const featured = document.querySelector("#featured-yes").checked;
const notFeatured = document.querySelector("#featured-no").checked;

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value;
    let featuredValue;

    if (document.querySelector("#featured-yes").checked) {
        featuredValue = true;
     } else  {
         featuredValue = false
     }

    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");

    }

    addProduct(nameValue, priceValue, descriptionValue, featuredValue, imageValue);
}

async function addProduct(title, price, description, featured, image_url) {
    const newUrl = url + "products";

    const data = JSON.stringify({ title: title, description: description, price: price, featured: featured, image_url: image_url});

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(newUrl, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }
        
        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

 
    } catch (error) {
        console.log(error);
        displayMessage("error", "An error occured", ".message-container");

       
    }
}