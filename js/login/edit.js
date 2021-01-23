import createMenu from "../components/createmenu.js";
import { getToken } from "../utils/storage.js";
import { url } from "../constants/settings.js";
import deleteButton from './components/deleteButton.js';
import displayMessage from "../ui/displayMessage.js";


createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = url + "products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
//const loading = document.querySelector(".loading");
const image = document.querySelector("#imageUrl");


(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        name.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;
        image.value = details.image_url;
        
        if(details.featured == true) {
          document.querySelector("#featured-yes").checked = true;
        } else {
           document.querySelector("#featured-no").checked = true;
        }

        deleteButton(details.id);

    } catch (error) {
        console.log(error);
    } finally {
       // loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const nameValue = name.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;
    const imageValue = image.value;
    let featuredValue;
    

  if (document.querySelector("#featured-yes").checked) {
     featuredValue = true;
  } else  {
      featuredValue = false
  }


    if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");

    }

    updateProduct(nameValue, priceValue, descriptionValue, idValue, featuredValue, imageValue);
}

async function updateProduct(title, price, description, id, featured, image_url) {
    const newUrl = url + "products/" + id;
    const data = JSON.stringify({ title: title, description: description, price: price, featured: featured, image_url: image_url });
    console.log(featured)
    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(newUrl, options);
        const json = await response.json();
       

        if (json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");

        }

        if (json.error) {
            "error", json.message, ".message-container";
            displayMessage("error", json.message, ".message-container");

        }
    } catch (error) {
        console.log(error);
    }
}