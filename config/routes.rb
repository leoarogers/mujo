Rails.application.routes.draw do
  root 'main#index'
  resources :about
  resources :isan_lookbook
  resources :core_lookbook
  resources :annex_lookbook
  resources :contact
  resources :policy
  resources :shipping
  resources :admin
  resources :press
  resources :stockists
end
