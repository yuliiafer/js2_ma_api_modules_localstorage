import  createHtml  from "./createHtml.js";


export default function searchResult(data, targetElement) {
    const search = document.querySelector(".search");

    function filterHtml(event, data) {
        const searchValue = event.target.value;
        const filterPrice = data.filter(function(data) {
            if (paseInt(data[i].price).startsWith(searchValue) <= searchValue) {
                return true;
            }
    

 });
    
    createHtml(filterHtml, filterPrice);
       
}
     search.addEventListener("keyup", filterHtml);
}   
    
