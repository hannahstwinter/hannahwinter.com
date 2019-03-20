class ProjectsController < ApplicationController
  def resourceful
  end

  def index
    @tabs = [
      { title: 'projects title one', content: "this is the content of projects one\n" },
      { title: 'projects title two', content: "this is the content of projects two\n" }
    ]
  end
end
