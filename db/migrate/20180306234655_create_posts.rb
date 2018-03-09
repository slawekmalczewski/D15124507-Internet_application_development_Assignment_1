class CreatePosts < ActiveRecord::Migration[5.1]
  def up
    create_table :posts do |t|
      t.integer "pozycja"
      t.string "title"
      t.text "body"
      t.boolean "visible", :default => true 
      t.timestamps
    end
  end

  def down
    drop_table :posts
  end

end
