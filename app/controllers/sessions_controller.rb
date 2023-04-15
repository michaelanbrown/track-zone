class SessionsController < ApplicationController
  skip_before_action :authenticate_runner, only: [:create, :destroy]

    def create
      runner = Runner.find_by_username(params[:username])
      if runner&.authenticate(params[:password])
        session[:runner_id] = runner.id
        render json: runner, status: :ok
      else 
        render json: { error: "Invalid Credentials" }, status: :unauthorized
      end
  
    end
  
    def destroy
      session.delete(:runner_id)
    end
  end