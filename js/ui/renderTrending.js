const container = document.querySelector(".trending-container");

export function renderTrending (getTrendingProducts) {
    container.innerHTML = "";

    getTrendingProducts.forEach(function(trending) {

        const image = trending.image_url;
        
        if(trending.featured) {
            container.innerHTML += 
            `<div class="col-sm d-flex justify-content-center mb-5">
            <a href="details.html?id=${trending.id}">
            <div class="card" style="width: 20rem;">
                    <img src=${image} class="card-img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${trending.title}</h5>
                                <p>$${trending.price}</p>
                                <p class="card-text">${trending.description}</p>
                             </div>
                        </div></a>
                    </div>`;
                }})};


