class ApplicationController < ActionController::API
  before_action :authenticate_runner

  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def current_runner
    @current_runner ||= Runner.find_by(id: session[:runner_id])
  end

  def responding_runner
    @responding_runner = Runner.find(params[:id])
  end

  private

  def authenticate_runner
    render json: { errors: {User: " Not Authorized"}}, status: :unauthorized unless current_runner
  end

  def is_authorized? 
    permitted = current_runner.id == responding_runner.id
    render json: { errors: {User: " does not have permissions"}}, status: :forbidden unless permitted 
  end

  def is_admin?
    permitted = current_runner.admin?
    render json: { errors: {User: " does not have permissions"}}, status: :forbidden unless permitted 
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Activity not found" }, status: :not_found
  end
end