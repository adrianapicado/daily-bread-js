class Meal {
    constructor(data) {
        this.id = data.id
        this.category_id = data.category.id
        this.name = data.name
        this.ingredients = data.ingredients
        this.calories = data.calories
    }

    renderMeals() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a> 
        </li>
        <br>
        <button id="create-meal" data-id="${meal.id}">New Meal</button>

        `
       }

    renderMeal() {
        return `
        <h3>${this.name}</h3>
        <hr>
        <h3>Ingredients:</h3>
        <br>
        <h3>${this.ingredients}</h3>
        <br>
        <h4>Calories:</h4>
        <br>
        <h3>${this.calories}</h3>
        <br> 
        <button id="delete-meal" data-id="${this.id}" data-category-id="${this.category_id}">Delete</button>

        `
    }

}