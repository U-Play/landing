ActionMailer::Base.delivery_method = :sendmail
ActionMailer::Base.perform_deliveries = true
# ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
	address: 'smtp.gmail.com',
	port: 587,
	domain: 'uplaypro.com',
	authentication: 'login',
	user_name: 'catch@uplaypro.com',
	password: ENV['SMTP_PASSWORD'],
	enable_starttls_auto: true
}
# ActionMailer::Base.smtp_settings = {
#   :address              => "prt22.wl-dns.com",
#   :port                 => 465,
#   :domain               => "uplaypro.com",
#   :user_name            => "hello@uplaypro.com",
#   :password             => ENV['SMTP_PASSWORD'],
#   :authentication       => :login,
#   :tls 					=> true
#   # :enable_starttls_auto => true
# }

ActionMailer::Base.default_url_options[:host] = "uplaypro.com"
# Mail.register_interceptor(DevelopmentMailInterceptor)
# Mail.register_interceptor(DevelopmentMailInterceptor) if Rails.env.development?