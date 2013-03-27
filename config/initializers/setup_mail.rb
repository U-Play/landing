ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.perform_deliveries = true

password = ''
if Rails.env.production?
	accounts = YAML::load(File.open('/home/deploy/config/accounts.yml')).to_hash
	# accounts = YAML::load(File.open('/Users/gabriel/ac.yml')).to_hash
	password = accounts['gmail']['password']
end

ActionMailer::Base.smtp_settings = {
	address: 'smtp.gmail.com',
	port: 587,
	domain: 'uplaypro.com',
	authentication: 'login',
	user_name: 'catch@uplaypro.com',
	password: password,
	enable_starttls_auto: true
}

ActionMailer::Base.default_url_options[:host] = "uplaypro.com"
