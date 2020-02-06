class ImageToNewParkForm < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :park_photo, :string, null: false, default: 'https://offtherailsdevelopment.s3.amazonaws.com/default_images/Best-coming-soon-pages.jpg'
  end
end
