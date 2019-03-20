class ResumeController < ApplicationController
  def index
    image_size = 100
    email = 'hstwinter@gmail.com'
    encoded_email = Digest::MD5.hexdigest(email.strip.downcase)
    default_image = CGI.escape "https://picsum.photos/#{image_size}/#{image_size}"
    @image_src = "https://www.gravatar.com/avatar/#{encoded_email}?s=#{image_size}&d=#{default_image}"
  end
end
