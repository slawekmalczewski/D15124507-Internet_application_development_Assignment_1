class PublicController < ApplicationController

  layout "public"

  def index
  end

  def showpost
    @post = Post.find(params[:id])
  end

  def listposts
    @posts = Post.where(:visible => true)
  end
end
