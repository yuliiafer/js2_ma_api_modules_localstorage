import displayMessage from "./displayMessage.js";
import { noResult } from "../constants/message.js";


export default function createHtml(data, resultContainer) {
    
    const result = document.querySelector(resultContainer);
    result.innerHTML = "";

    if (data.length === 0) {
        displayMessage("", noResult, resultContainer);
    }

    for (let i = 0; i < data.length; i++) {
        result.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Price: <b>${data[i].price}</b></p>
                                        <i class="far fa-heart" data-id="${data[i].id}" data-name="${data[i].name}"></i>
                                    </div>`;
    }
}


