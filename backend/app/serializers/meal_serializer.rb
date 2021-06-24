class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients, :calories
  belongs_to :category

end
