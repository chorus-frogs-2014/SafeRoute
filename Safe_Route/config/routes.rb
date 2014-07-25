SafeRoute::Application.routes.draw do
  resources :paths
  get "/" => "paths#index", :as => "root"
end
