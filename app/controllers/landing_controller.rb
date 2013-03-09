class LandingController < ::ApplicationController
  def index
    @mixpanel.track 'Front page'
  end

  def register
    @mixpanel.track 'New registration'
    puts "HERERERERERER REGISTER #{params.inspect}"
    redirect_to action: 'index'
  end
end
