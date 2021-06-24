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
