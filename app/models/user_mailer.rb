class UserMailer < ActionMailer::Base
	default from: "hello@uplaypro.com"

	def welcome_email(user)
		@user = user
		mail(to: user.email, subject: 'Welcome to U-PLAY')
	end
end