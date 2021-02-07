fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => displayCountries(data));


const displayCountries = meals => {
    const countriesDiv = document.getElementById('countries');
    meals.forEach(meals => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${data.meals[0].strMeal}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetail('${data.meals[0].strMeal}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
}