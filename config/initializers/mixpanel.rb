if ["production"].include?(Rails.env)
  MIXPANEL_TOKEN = "a629f5a7e61c61941201e842711dba7f"
  #Uplaypro::Application.config.middleware.use "Mixpanel::Tracker::Middleware", MIXPANEL_TOKEN
else
  class DummyMixpanel
    def method_missing(m, *args, &block)
      true
    end
  end
end
