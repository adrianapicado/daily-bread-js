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


}
