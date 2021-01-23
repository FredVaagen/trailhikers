const container = document.querySelector(".products-container");

export function renderEditProducts (editProducts) {
    container.innerHTML = "";

    editProducts.forEach(function(edit) {

        const image = edit.image_url;

            container.innerHTML += 
            `<div class="col-sm d-flex justify-content-center mb-5">
            <a href="/edit.html?id=${edit.id}">
                <div class="card" style="width: 20rem;">
                    <img src=${image} class="card-img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${edit.title}</h5>
                                <p class="card-price">$${edit.price}</p>
                                <p class="card-text">${edit.description}</p></a>
                             </div>
                        </div>
                    </div> `
       })};   


