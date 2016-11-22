class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :difficulty
      t.integer :time
      t.integer :servings
      t.string :ingredients, array: true
      t.string :directions, array: true
      t.integer :category_id
      t.integer :author_id

      t.timestamps
    end
  end
end
