class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :initialize_mixpanel
  before_filter :initialize_gibbon

  def initialize_gibbon
    @gb = Gibbon.new GIBBON_API_KEY
  end

  def initialize_mixpanel
    if defined?(MIXPANEL_TOKEN)
      @mixpanel = Mixpanel::Tracker.new MIXPANEL_TOKEN, request.env
    else
      @mixpanel = DummyMixpanel.new
    end
  end

end
