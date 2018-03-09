class Post < ApplicationRecord


  scope :sort, lambda{order("posts.created_at ASC")}
end
