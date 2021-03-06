class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.time :start_time
      t.time :end_time
      t.string :name
      t.string :professor
      t.integer :days_of_the_week
      t.integer :user_id
      t.timestamp
    end
  end
end
