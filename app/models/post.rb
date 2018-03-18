class Post < ApplicationRecord

  validates 	:title,
				      :presence => true,
				      :length => {:maximum => 80, :message => ": The title is too long maximum size of title is 80 characters"}

  validates 	:body,
              :presence => true,
              :length => {:minimum => 50, :message => ": The post is too short minimum size of title is 50 characters"}

  scope :sort, lambda{order("posts.created_at ASC")}

end
