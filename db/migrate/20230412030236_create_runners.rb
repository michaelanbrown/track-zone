class CreateRunners < ActiveRecord::Migration[6.1]
  def change
    create_table :runners do |t|
      t.string :full_name
      t.integer :age
      t.string :photo
      t.integer :coach_id
      t.integer :event_id
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end

    add_foreign_key :runners, :coaches, column: :coach_id
    add_index :runners, :coach_id

    add_foreign_key :runners, :events, column: :event_id
    add_index :runners, :event_id
  end
end
