const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const mealList = document.getElementById('meal');
const mealResult = document.getElementById('meal-result');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const mealTypeFilter = document.getElementById('meal-type-filter'); 
const maxCaloriesInput = document.getElementById('max-calories');
const loadingSpinner = document.getElementById('loading-spinner');

searchBtn.addEventListener('click', searchRecipes);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const mealType = mealTypeFilter.value;
    const maxCalories = maxCaloriesInput.value.trim();

    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`;

    loadingSpinner.style.display = 'block';

    if (mealType !== 'all') {
        if (mealType === 'snacks') {
            url += `&mealType=snack`; 
        } else {
            url += `&mealType=${mealType}`;
        }
    }

    if (maxCalories) {
        url += `&calories=${maxCalories}`;
    }

    if (searchValue === '') {
        mealList.innerHTML = '<p>Please enter an ingredient to search.</p>';
        mealResult.classList.remove('show');
        loadingSpinner.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data.hits);
        loadingSpinner.style.display = 'none';
    } catch (error) {
        mealList.innerHTML = '<p>An error occurred while fetching data.</p>';
        mealResult.classList.add('show');
        loadingSpinner.style.display = 'none';
    }
}

function displayRecipes(recipes) {
    let html = '';
    if (recipes.length > 0) {
        recipes.forEach((recipe) => {
            html += `
                <div class="meal-item" data-id="${recipe.recipe.uri}">
                    <div class="meal-img">
                        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                    </div>
                    <div class="meal-name">
                        <h3>${recipe.recipe.label}</h3>
                        <a href="${recipe.recipe.url}" class="recipe-btn" target="_blank">View Recipe</a>
                    </div>
                </div>
            `;
        });
        mealList.innerHTML = html;
        mealResult.classList.add('show');
    } else {
        mealList.innerHTML = `<p>Sorry, we didn't find any recipes for "${searchValue}".</p>`;
        mealResult.classList.add('show');
    }
}

function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        const mealItem = e.target.parentElement.parentElement;
        const recipeUrl = e.target.getAttribute('href');
        window.open(recipeUrl, '_blank');
    }
}
