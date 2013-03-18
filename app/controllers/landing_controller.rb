class LandingController < ::ApplicationController
  def index
  end

  def register
  	@user = User.new(email: params[:email])
  	if @user.save
  		render json: @user, status: :created
  		UserMailer.welcome_email(@user).deliver
  	else
  		render json: @user.errors, status: :unprocessable_entity
  	end
  end
end
