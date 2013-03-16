class LandingController < ::ApplicationController
  def index
  end

  def register
  	@user = User.new(email: params[:email])
  	if @user.save
  		UserMailer.welcome_email(@user).deliver
  		render json: @user, status: :created
  	else
  		render json: @user.errors, status: :unprocessable_entity
  	end
  end
end
