Rails.application.routes.draw do
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  get 'admin/*all', to: 'admin/home#index', constraints: { all: /.*/ }

  namespace 'api' do
    post 'auth', to: 'auth#create'
  end
end
