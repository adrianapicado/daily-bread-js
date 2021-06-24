const apiService = new ApiService() 

let main = document.getElementById('main')

const init = () => {
    bindEventListeners()
    renderCategories() 
}

function bindEventListeners() {
    document.getElementById('category-form').addEventListener('click', displayCreateForm)
    document.getElementById('categories').addEventListener('click', renderCategories)
}

async function renderCategories() {
    const categories = await apiService.fetchCategories()
    main.innerHTML = ""
    categories.map(category => {
        const newCategory = new Category(category)
        main.innerHTML += newCategory.render()
    })
    bindClicksToLinks()
}

function displayCreateForm() {
    let formDiv = document.querySelector("#new-category-form")
    let html = `
        <form>
            <label>Name:</label>
            <input type="text" id="name">
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createCategory)    
}

async function createCategory(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let category = {
        name: e.target.querySelector("#name").value
    }

    let data = await apiService.fetchCreateCategory(category)
    let newCategory = new Category(data)
    main.innerHTML += newCategory.render()
    bindClicksToLinks()
    clearForm()
}

async function displayCategory(id){
    const data = await apiService.fetchCategory(id)
    const category = new Category(data)
    main.innerHTML = category.renderCategory()
    if (category.meals) {
        category.meals.forEach(meal => {
            main.innerHTML += `
            <li><a href="#" data-id="${meal.id}" data-category-id="${category.id}">${meal.name}</a> </li>
            <br>
            `
        })
        bindClicksToMealsLinks()
    }
    document.getElementById('add-meal').addEventListener('click', displayMealForm)
    clearForm()
}

async function renderMeals() {  
    const meals = await apiService.fetchMeals()
    main.innerHTML = ""
    meals.map(meal => {
        const newMeal = new Meal(meal)
        main.innerHTML += newMeal.render()
    })
}

function displayMealForm(e) { 

    let formDiv = document.querySelector("#add-meal-div") 
    let html = `
        <form>
            <input type="hidden" id="categoryId" value="${e.target.dataset.id}">
            <label>Name:</label>
            <input type="text" id="name">
            <label>Ingredients:</label>
            <input type="text" id="ingredients">
            <label>Calories:</label>
            <input type="text" id="calories"></input>
            <input type="submit">
        </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createMeal)    
}

async function createMeal(e) {
    e.preventDefault()

    const categoryId = document.querySelector("#add-meal").dataset.id
    let main = document.getElementById('main')
    let meal = {
        category_id: categoryId, 
        name: e.target.querySelector("#name").value,
        ingredients: e.target.querySelector("#ingredients").value,
        calories: e.target.querySelector("#calories").value,
    }

    let data = await apiService.fetchCreateMeal(meal)
    let newMeal = new Meal(data)
    main.innerHTML = newMeal.renderMeal() 
    bindClicksToCreateMeal()
    clearForm()
}

async function displayMeal(e) {
    let id = e.target.dataset.id

    const data = await apiService.fetchMeal(id)
    const meal = new Meal(data)
    main.innerHTML = meal.renderMeal()
    document.getElementById('delete-meal').addEventListener('click', removeMeal) 
}






