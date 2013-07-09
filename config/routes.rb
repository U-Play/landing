Uplaypro::Application.routes.draw do

  scope 'l', as: "landing" do
    match '/' => 'landing#index', via: :get
    match '/register' => 'landing#register', via: :post
  end

  get '/newsletter' => 'newsletter#show'

  root to: 'landing#index'

end
