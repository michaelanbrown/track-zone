class EventsController < ApplicationController

    def index 
        render json: Event.all, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private
    
    def event_params
        params.permit(:full_name, :age, :photo)
    end 
end