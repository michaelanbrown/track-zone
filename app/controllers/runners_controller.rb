class RunnersController < ApplicationController
    def index
        render json: Runner.all, status: :ok
    end

    def show 
        runner = Runner.find(params[:id])
        render json: runner, status: :ok
    end

    def create
        runner = Runner.create!(runner_params)
        session[:runner_id] = runner.id
        render json: runner, status: :ok
    end

    private 

    def runner_params
        params.permit(:username, :email, :password, :full_name, :age, :photo, :coach_id, :event_id)
    end 
end