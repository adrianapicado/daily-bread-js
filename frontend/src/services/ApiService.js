class ApiService {
    constructor() {
        this.base_url = 'http://localhost:3000'
    } 

    async fetchCategories() {
        let res = await fetch(this.base_url + '/categories')
        let data = await res.json()
        return data
    }

    async fetchCategory(id) {
        let res = await fetch(this.base_url + `/categories/${id}`)
        let data = await res.json()
        return data
    }

    async fetchCreateCategory(categoryData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(categoryData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetch(this.base_url + `/categories`, configObj)
        let data = await res.json()
        return data
    }

    async fetchMeals() {
        let res = await fetch(this.base_url + '/meals')
        let data = await res.json()
        return data
    }


}
