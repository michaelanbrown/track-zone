class RunnersController < ApplicationController
    skip_before_action :authenticate_runner, only: [:create, :index]


    def index
        render json: Runner.all, status: :ok
    end

    def show 
        render json: current_runner, status: :ok
    end

    def create
        runner = Runner.create!(runner_params)
        session[:runner_id] = runner.id
        render json: runner, status: :ok
    end

    private 

    def runner_params
        params.permit(:username, :email, :password, :full_name, :age, :photo, :coach_id, :event_id, :admin)
    end 
end