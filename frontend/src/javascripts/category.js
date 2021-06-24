class Category {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.meals = data.meals
    }

    render() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        ` 
    }

    renderCategory() {
        return `
            <h3>${this.name}</h3>
            <button id="add-meal" data-id="${this.id}">Add Meal</button>
            <hr>
            
            <div id="add-meal-div">
            </div>
            <br>
            <br>
            `
    }
}