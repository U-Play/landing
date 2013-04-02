class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :variables
  def variables
  	@host = request.host
  end
end
