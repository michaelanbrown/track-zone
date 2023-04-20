Rails.application.routes.draw do
  
  resources :runners
  resources :events
  resources :coaches, only: [:index, :create]

  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "runners#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
