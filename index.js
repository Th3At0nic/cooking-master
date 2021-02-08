// fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(res => res.json())
    .then(data => displayMeals(data));

const displayMeals = data => {
    console.log(data);
    const mealDiv = document.getElementById("mealDb");
    for (let i = 0; i < data.meals.length; i++) {
        const meal = data.meals[i];
        document.getElementById("itemMenuImg1").src = data.meals[0].strMealThumb;
        document.getElementById("itemMenuTitle1").innerText = data.meals[0].strMeal;
        document.getElementById("itemMenuImg2").src = data.meals[1].strMealThumb;
        document.getElementById("itemMenuTitle2").innerText = data.meals[1].strMeal;
        document.getElementById("itemMenuImg3").src = data.meals[2].strMealThumb;
        document.getElementById("itemMenuTitle3").innerText = data.meals[2].strMeal;
        document.getElementById("itemMenuImg4").src = data.meals[3].strMealThumb;
        document.getElementById("itemMenuTitle4").innerText = data.meals[3].strMeal;
        document.getElementById("itemMenuImg5").src = data.meals[4].strMealThumb;
        document.getElementById("itemMenuTitle5").innerText = data.meals[4].strMeal;
        document.getElementById("itemMenuImg6").src = data.meals[5].strMealThumb;
        document.getElementById("itemMenuTitle6").innerText = data.meals[5].strMeal;
        document.getElementById("itemMenuImg7").src = data.meals[6].strMealThumb;
        document.getElementById("itemMenuTitle7").innerText = data.meals[6].strMeal;
        document.getElementById("itemMenuImg8").src = data.meals[7].strMealThumb;
        document.getElementById("itemMenuTitle8").innerText = data.meals[7].strMeal;
        document.getElementById("itemMenuImg9").src = data.meals[8].strMealThumb;
        document.getElementById("itemMenuTitle9").innerText = data.meals[8].strMeal;

    }

};

function SearchMeal() {
    let mealInput = document.getElementById("meal-input").value;
    mealInput = mealInput.trim();
    if (mealInput === "") {
        alert("Please Enter a meal name.");
    } else {
        processData();
    }

    function processData() {
        document.getElementById("meal-input").value = "";
        document.getElementById("mealDb").style.display = "none";
        document.getElementById("search-result").style.display = "block";

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.meals[0].strMeal);
                // if (mealInput != data.meals) {
                //     alert(`No meal found with name \"${mealInput}\". Please try again.`);
                // } else {
                //     displayFoundMeals();
                // }

                // function displayFoundMeals() {
                for (let i = 0; i < data.meals.length; i++) {
                    const element = data.meals[i];
                    const item = element.strMeal;
                    console.log(item);
                    if (data.meals === null) {
                        alert(`No meal found with name \"${mealInput}\". Please try again.`);
                    } else {
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
                }
                // }
            });
    }
}

function displayMealDetail() {
    // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`

    let title2 = document.getElementsByClassName("card-title");
    for (let i = 0; i < title2.length; i++) {
        const element2 = title2[i];
        // console.log(element2);

        // const title = document.getElementById("itemMenuTitle1").innerText;
        let title = element2.innerText;
        console.log(title);
        // return title;

        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (let i = 0; i < data.meals.length; i++) {
                    const element = data.meals[i];

                    document.getElementById("mealDetail-click").innerHTML = `
                    <div id="box-div">
                    <h1>${element.strMeal}</h1>
                    <h4>${element.strArea}</h4>
                    <h5>${element.strCategory}</h5>
                    <ul>
                    <li>${element.strIngredient1}</li>
                    <li>${element.strIngredient2}</li>
                    <li>${element.strIngredient3}</li>
                    <li>${element.strIngredient4}</li>
                    <li>${element.strIngredient5}</li>
                    <li>${element.strIngredient6}</li>
                    <li>${element.strIngredient7}</li>
                    <li>${element.strIngredient8}</li>
                    <li>${element.strIngredient9}</li>
                    </ul>
                    <p>${element.strInstructions}</p></div>
                `;
                }
            });
        // break;
    }
}