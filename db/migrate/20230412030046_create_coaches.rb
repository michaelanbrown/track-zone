class CreateCoaches < ActiveRecord::Migration[6.1]
  def change
    create_table :coaches do |t|
      t.string :full_name
      t.integer :age
      t.string :photo

      t.timestamps
    end
  end
end
