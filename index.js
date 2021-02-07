fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => displayMeals(data));

const displayMeals = categories => {
    console.log(categories);
    const ul = document.getElementById("mealDb");
    for (let i = 0; i < categories.length; i++) {
        const meal = categories[i];
        const menuItem = meal.strCategory;
        console.log(menuItem);
        const li = document.createElement("li");
        li.innerText = categories.strCategory;
        ul.appendChild(li);

    }

};



function SearchMeal() {
    let mealInput = document.getElementById("meal-input").value;
    document.getElementById("search-result").style.display = "block";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.meals[0].strMeal);
            for (let i = 0; i < data.meals.length; i++) {
                const element = data.meals[i];
                const item = element.strMeal;
                console.log(item);
                document.getElementById("meal-container").innerHTML = data.meals[i].strMeal;
                document.getElementById("meal-image").src = data.meals[i].strMealThumb;
                document.getElementById("ingredient").innerHTML = "Ingredients";
                document.getElementById("list1").innerHTML = data.meals[i].strIngredient1;
                document.getElementById("list2").innerHTML = data.meals[i].strIngredient2;
                document.getElementById("list3").innerHTML = data.meals[i].strIngredient3;
                document.getElementById("list4").innerHTML = data.meals[i].strIngredient4;
                document.getElementById("list5").innerHTML = data.meals[i].strIngredient5;
                document.getElementById("list6").innerHTML = data.meals[i].strIngredient6;
                document.getElementById("list7").innerHTML = data.meals[i].strIngredient7;
                document.getElementById("list8").innerHTML = data.meals[i].strIngredient8;
                document.getElementById("list9").innerHTML = data.meals[i].strIngredient9;
                document.getElementById("list10").innerHTML = data.meals[i].strIngredient10;
                document.getElementById("list11").innerHTML = data.meals[i].strIngredient11;
                document.getElementById("instruction").innerHTML = data.meals[i].strInstructions;
            }

        });
}

// function SearchMeal() {
//     let mealInput = document.getElementById("meal-input").value;
//     // let appid = "c8a02f0db1884b41d5e8fad78d640254";
//     // let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;


//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.meals[0].strMeal);
//             for (let i = 0; i < data.meals.length; i++) {
//                 const element = data.meals[i];
//                 console.log(element);
//             }
//             document.getElementById("meal-name").innerText = data.;
//             document.getElementById("temperature").innerText = (data.main.temp - 273.15).toFixed(2);

//             let weatherIcon = data.weather[0].icon;
//             let iconUrl = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
//             document.getElementById("weather-icon").src = iconUrl;
//             document.getElementById("aerosol").innerText = data.weather[0].main;
//             console.log(data);
//         });
// }