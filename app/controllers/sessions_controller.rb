class SessionsController < ApplicationController
    def create
      user = Runner.find_by_username(params[:username])
      if user&.authenticate(params[:password])
        session[:runner_id] = user.id
        render json: user, status: :ok
      else 
        render json: { error: "Invalid Credentials" }, status: :unauthorized
      end
  
    end
  
    def destroy
      session.delete(:runner_id)
    end
  end