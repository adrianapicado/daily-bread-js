# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Fast = Category.create(name: 'fast')
Sweet = Category.create(name: 'sweet')
Sour = Category.create(name: 'sour')


Meal.create([
    {name: "Burger", ingredients: "bun, patty, tomato, lettuce", calories: "450", category: "Fast"},
    {name: "Candy", ingredients: "sugar", calories: "290", category: "Sweet"},
    {name: "Vinegar", ingredients: "vinegar ing", calories: "30", category: "Sour"},
)]