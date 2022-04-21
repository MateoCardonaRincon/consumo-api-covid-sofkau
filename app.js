import fetchAllData from "./fetchAllData.js";
import buscarInfoPais from "./buscarInfoPais.js";

const apiURL = "https://api.covid19api.com/summary";

fetchAllData(apiURL);

let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => buscarInfoPais(apiURL));