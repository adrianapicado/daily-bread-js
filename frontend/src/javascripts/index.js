const base_url = 'http://localhost:3000'

window.addEventListener("DOMContentLoaded", () => {
    getCategories()
})

function getCategories() {
    let main = document.getElementById('main')
    fetch(base_url + '/categories')
    .then(res => res.json())
    .then(categories => {
        console.log(categories)
    })
}

function bindClicksToLinks() {
    const categories = document.querySelectorAll("li a")
    categories.forEach(category => {
        category.addEventListener('click', displayCategory)
    })
}