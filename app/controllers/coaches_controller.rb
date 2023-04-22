class CoachesController < ApplicationController
    skip_before_action :authenticate_runner, only: [:create, :index]
    before_action :is_authorized?, only: [:update, :destroy]

    def index 
        render json: Coach.all, status: :ok
    end

    def show
        coach = Coach.find(params[:id])
        render json: coach, status: :ok
    end

    def create
        coach = Coach.create!(coach_params)
        render json: coach, status: :created
    end

    # def update
    #     coach = Coach.find(params[:id])
    #     coach.update!(coach_params)
    #     render json: coach, status: :accepted
    # end 

    def destroy
        coach = Coach.find(params[:id])
        coach.destroy
        head :no_content 
    end 

    private
    
    def coach_params
        params.permit(:full_name, :age, :photo)
    end 
end