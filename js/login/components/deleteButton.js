import { url } from "../../constants/settings.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="delete">Delete</button>`;

    const button = document.querySelector("button.delete");

    button.onclick = async function () {
 
        const doDelete = confirm("Are you sure you want to delete this?");
    
        if (doDelete) {
            const newUrl = url + "products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(newUrl, options);
                const json = await response.json();

                location.href = "/productsEdit.html";

            } catch (error) {
                console.log(error);
            }
        }
    };
}