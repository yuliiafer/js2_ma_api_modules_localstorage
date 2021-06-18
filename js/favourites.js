import { getFavourites } from "./components/getFavourites.js";

const favourites = getFavourites();

const resultContainer = document.querySelector(".result-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites";
}

favourites.forEach((result) => {
    resultContainer.innerHTML += `<div class="result">
                                    <h4>${data[i].name}</h4>
                                    <p>Price: <b>${data[i].price}</b></p>
                                    <i class="fa fa-heart"></i>
                                </div>`;
});