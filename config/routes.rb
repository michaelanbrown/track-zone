Rails.application.routes.draw do
  
  resources :runners
  resources :events, only: [:index, :create]
  resources :coaches, only: [:index, :create, :destroy]

  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "runners#show"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
