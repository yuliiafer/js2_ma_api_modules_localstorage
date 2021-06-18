import { url } from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import createHtml from "./components/createHtml.js";
import { getFavourites } from "./components/getFavourites.js";



async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createHtml(json.data, ".result-container");
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".result-container");
    }
}

callApi();

const resultsContainer = document.querySelector(".result-container");
const favourites = getFavourites();
// it does not work
results.forEach((data) => {
    let cssClass = "far";
    const doesObjectExist = favourites.find(function (fav) {
        console.log(fav);
        return parseInt(fav.price) === data.price;
});
console.log(doesObjectExist);
if (doesObjectExist) {
    cssClass = "fa";
}

resultsContainer.innerHTML += `<div class="result">
                                <h4>${data.name}</h4>
                                <i class="${cssClass} fa-heart" data-id="${data.id}" data-name="${data.name}"></i>
                            </div>`;
});

const favButtons = document.querySelectorAll(".result i");
favButtons.forEach((button) => {
    button.addEventListener("click", favClick);
});
function favClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");
    
    const name = this.dataset.name;
    const price = this.dataset.price;
    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
        return fav.price === price;
    });

    if (productExists === undefined) {
        const result = { name: name, price: price };
        currentFavs.push(result);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.price !== price);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
