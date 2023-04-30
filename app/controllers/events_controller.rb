class EventsController < ApplicationController
    skip_before_action :authenticate_runner
    # before_action :is_admin?, only: [:destroy]

    def index 
        render json: Event.all, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    # def destroy
    #     event = Event.find(params[:id])
    #     event.destroy
    #     head :no_content 
    # end 

    private
    
    def event_params
        params.permit(:name, :distance, :unit_of_measurement)
    end 
end