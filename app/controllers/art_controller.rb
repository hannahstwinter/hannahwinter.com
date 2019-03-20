class ArtController < ApplicationController
  def photo
  end

  def sculpture_plus
  end

  def writing
  end

  def index
    @tabs = [
      { title: 'art title one', content: "this is the content of art one\n" },
      { title: 'art title two', content: "this is the content of art two\n" }
    ]
  end
end
