class ImageToNewParkForm < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :park_photo, :string, null: false, default: 'https://images2.imgbox.com/f2/28/UZcejNZZ_o.jpg'
  end
end
