import { url } from './constants/settings.js';

export default function heroBanner() {

    const container = document.querySelector(".hero-banner")

    const heroUrl = url + "home";

    async function getHeroBanner () {
        try {
            const response = await fetch(heroUrl);
            const json = await response.json();
       
            const image = `http://localhost:1337${json.hero_banner.url}`;
            
            container.style.backgroundImage = `url(${image})`;
            
        } catch (error) {
            console.log(error);
        }
    };
    
    getHeroBanner (); 

}
  
 



   




        

    




//`<div class="carousel-item active embed-responsive-item" style="background-image: url(images/hero.jpg);"></div>