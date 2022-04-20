const apiURL = "https://api.covid19api.com/summary";

fetch(apiURL)
  .then((response) => response.json())
  .then((datos) => {
    let paises = datos.Countries
    paises.map((pais) => {
      let btn = document.createElement("input");
      btn.setAttribute("id", pais.CountryCode);
      btn.setAttribute("type", "button");
      btn.setAttribute("value", pais.Country);
      btn.setAttribute("class", "btn btn-light");

      let salto = document.createElement("br");
      document.getElementById("display-countries").appendChild(btn);
      document.getElementById("display-countries").appendChild(salto);

      btn.addEventListener("click", () => {
        mostrarInfoPais(pais);
      });
    });
  });

const mostrarInfoPais = async (pais) => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((datos) => {
      let theader = `<tr><th>Código</th><th>País</th><th>Muertes</th>
                        <th>Recuperados</th></tr>`;

      let tbody = `<tr><td>${pais.CountryCode}</td>
                                    <td>${pais.Country}</td>
                                    <td>${pais.TotalDeaths}</td>
                                    <td>${pais.TotalRecovered}</td></tr>`;

      document.getElementById("table1").innerHTML = theader.concat(tbody);
    });
};

const buscarInfoPais = async () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((datos) => {
      let input = document.getElementById("input-country");

      const allCountries = datos.Countries;

      const thisCountry = allCountries.filter(
        (c) => c.Country.toLowerCase() === input.value.toLowerCase()
      )[0];

      let theader = `<tr><th>Código</th><th>País</th><th>Muertes</th>
                        <th>Recuperados</th></tr>`;

      let tbody = `<tr><td>${thisCountry.CountryCode}</td>
                                    <td>${thisCountry.Country}</td>
                                    <td>${thisCountry.TotalDeaths}</td>
                                    <td>${thisCountry.TotalRecovered}</td></tr>`;

      document.getElementById("table1").innerHTML = theader.concat(tbody);
    });
};

let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => buscarInfoPais());
