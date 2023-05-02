class RunnersController < ApplicationController
    skip_before_action :authenticate_runner, only: [:create, :index]
    before_action :is_authorized?, only: [:update, :destroy]

    def index
        render json: Runner.all.order(:id), status: :ok
    end

    def show
        render json: current_runner, status: :ok
    end

    def create
        runner = Runner.create!(runner_params, admin: false)
        runner&.authenticate(params[:password])
        session[:runner_id] = runner.id
        render json: runner, status: :ok
    end

    def update
        runner = Runner.find(params[:id])
        runner.update!(runner_params)
        render json: runner, status: :accepted
    end

    def destroy
        runner = Runner.find(params[:id])
        session.delete(:runner_id)
        runner.destroy
        head :no_content 
    end 

    private 

    def runner_params
        params.permit(:username, :email, :password, :full_name, :age, :photo, :coach_id, :event_id)
    end 
end