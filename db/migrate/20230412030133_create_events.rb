class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :distance
      t.string :unit_of_measurement

      t.timestamps
    end
  end
end
