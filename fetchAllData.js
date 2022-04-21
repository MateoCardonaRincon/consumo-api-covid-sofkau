import mostrarInfoPais from "/mostrarInfoPais.js";

const fetchAllData = async (apiURL) => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((datos) => {
      let paises = datos.Countries;
      paises.map((pais) => {
        let btn = document.createElement("input");
        btn.setAttribute("id", pais.CountryCode);
        btn.setAttribute("type", "button");
        btn.setAttribute("value", pais.Country);
        btn.setAttribute("class", "btn btn-light mt-1 w-100");

        let salto = document.createElement("br");
        document.getElementById("display-countries").appendChild(btn);
        document.getElementById("display-countries").appendChild(salto);

        btn.addEventListener("click", () => {
          mostrarInfoPais(apiURL, pais);
        });
      });
    });
};

export default fetchAllData;
