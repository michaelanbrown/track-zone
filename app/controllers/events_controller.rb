class EventsController < ApplicationController
    skip_before_action :authenticate_runner, only: [:create, :index]

    def index 
        render json: Event.all, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private
    
    def event_params
        params.permit(:name, :distance, :unit_of_measurement)
    end 
end