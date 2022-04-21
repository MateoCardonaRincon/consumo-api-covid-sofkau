const mostrarInfoPais = async (apiURL, pais) => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((datos) => {
      let theader = `<tr class="thead-dark"><th>Código</th><th>País</th><th>Muertes</th>
      <th>Recuperados</th></tr>`;

      let tbody = `<tr><td>${pais.CountryCode}</td>
      <td>${pais.Country}</td>
      <td>${pais.TotalDeaths}</td>
      <td>${pais.TotalRecovered}</td></tr>`;

      document.getElementById("table1").innerHTML = theader.concat(tbody);
    });
};

export default mostrarInfoPais;
