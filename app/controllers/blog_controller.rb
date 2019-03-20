class BlogController < ApplicationController
  def coding_tips
  end

  def index
    @tabs = [
      { title: 'blog title one', content: "this is the content of blog one\n" },
      { title: 'blog title two', content: "this is the content of blog two\n" }
    ]
  end
end
