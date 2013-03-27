class UserMailer < ActionMailer::Base
	default from: "hello@uplaypro.com"

	def welcome_email(user, host)
		@host = host
		mail(from: 'hello@uplaypro.com', to: user.email, subject: 'Welcome to U-PLAY')
	end
end
