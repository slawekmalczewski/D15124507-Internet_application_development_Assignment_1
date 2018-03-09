class PostsController < ApplicationController

  layout "public"

  def index
    @post = Post.sort
  end

  def new
    @posts = Post.new({:title => "Here enter the title"})
    @counter = Post.count + 1
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      flash[:notice] = "Post has been created successfully"
      redirect_to(:action => 'index')
    else
      @counter = Post.count + 1
      render('new')
    end
  end

  def edit
    @posts = Post.find(params[:id])
    @counter = Post.count
  end

  def update
    @posts = Post.find(params[:id])
    if @posts.update_attributes(post_params)
      flash[:notice] = "Post has been updated successfully"
      redirect_to(:action => 'show', :id => @posts.id)
    else
      @counter = Post.count
      render('edit')
    end
  end

  def delete
    @post = Post.find(params[:id])
  end

  def erase
    post = Post.find(params[:id]).destroy
    flash[:notice] = "Post has been deleted successfully"
    redirect_to(:action => 'index')
  end

  def show
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:posts).permit(:title, :pozycja, :visible, :body, :created_at)
  end
end
