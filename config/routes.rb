Rails.application.routes.draw do
  root 'main#index'
  resources :about
  resources :isan_lookbook
  resources :core_lookbook
  resources :annex_lookbook
  resources :core_supply_lookbook
  resources :contact
  resources :policy
  resources :shipping
  resources :admin
  resources :press
  resources :studio_series
  resources :careers
end
