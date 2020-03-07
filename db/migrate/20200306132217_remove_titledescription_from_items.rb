class RemoveTitledescriptionFromItems < ActiveRecord::Migration[6.0]
  def change

    rename_column :items, :titledescription, :title
    add_column :items, :description, :string
  end
end
