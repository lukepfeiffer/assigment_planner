class CoursesController < ApplicationController
  def index
    @courses = Course.all
    @course = Course.new
  end

  def create
    course = Course.new(course_params)
    if course.save
      render json: course
    else
      render json: course.erros, status: :unprocessable_entity
    end
  end

  private

  def courses_params
    params.require(:course).permit(
      :name,
      :professor,
      :start_time,
      :end_time
    )
  end
end
