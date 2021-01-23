//import displayMessage from "./components/common/displayMessage.js";
import { saveToken, saveUser } from "../utils/storage.js";
import { url } from "../constants/settings.js";
import createMenu from "../components/createmenu.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

createMenu();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".message-container");
    }

    doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
    const newUrl = url + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(newUrl, options);
        const json = await response.json();

        if (json.user) {
            "success", "Successfully logged in", ".message-container";

            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/";
        }

        if (json.error) {
            "warning", "Invalid login details", ".message-container";
        }
    } catch (error) {
        console.log(error);
    }
}