const buscarInfoPais = async (apiURL) => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((datos) => {
      let input = document.getElementById("input-country");

      const allCountries = datos.Countries;

      const thisCountry = allCountries.filter(
        (c) => c.Country.toLowerCase() === input.value.toLowerCase()
      )[0];

      let theader = `<tr class="thead-dark"><th>Código</th><th>País</th><th>Muertes</th>
                          <th>Recuperados</th></tr>`;

      let tbody = `<tr><td>${thisCountry.CountryCode}</td>
                                      <td>${thisCountry.Country}</td>
                                      <td>${thisCountry.TotalDeaths}</td>
                                      <td>${thisCountry.TotalRecovered}</td></tr>`;

      document.getElementById("table1").innerHTML = theader.concat(tbody);
    });
};

export default buscarInfoPais;
