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
        runner = Runner.create!(runner_params)
        runner.update(admin: false, coach_id: 34, event_id: 1)
        if runner&.authenticate(params[:password])
            session[:runner_id] = runner.id
            render json: runner, status: :ok
          else 
            render json: { errors: "Invalid Credentials" }, status: :unauthorized
          end
    end

    def update
        runner = Runner.find(params[:id])
        if current_runner.admin
            runner.update!(admin_runner_params)
        else
            runner.update!(runner_params)
        end
        render json: runner, status: :accepted
    end

    def destroy
        runner = Runner.find(params[:id])
        runner.destroy
        head :no_content 
    end 

    private 

    def admin_runner_params
        params.permit(:username, :email, :password, :full_name, :age, :photo, :coach_id, :event_id, :admin)
    end

    def runner_params
        params.permit(:username, :email, :password, :full_name, :age, :photo, :coach_id, :event_id)
    end 
end