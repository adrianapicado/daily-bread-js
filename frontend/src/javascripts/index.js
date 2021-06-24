const apiService = new ApiService() 

let main = document.getElementById('main')

const init = () => {
    bindEventListeners()
    renderCategories() 
}

function bindingEventListeners() {
    document.getElementById('category-form').addEventListener('click', displayCreateForm)
    document.getElementById('categories').addEventListener('click', renderCategories)
}

function bindingClicksToLinks() {
    const categories = document.querySelectorAll("li a")
    categories.forEach(category => {
        category.addEventListener('click', displayCategory)
    })
}