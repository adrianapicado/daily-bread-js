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