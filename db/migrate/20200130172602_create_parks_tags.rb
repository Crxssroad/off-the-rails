class CreateParksTags < ActiveRecord::Migration[5.2]
  def change
    create_table :parks_tags do |t|
      t.belongs_to :park, null: false
      t.belongs_to :tag, null: false

      t.timestamps
    end
  end
end
