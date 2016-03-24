class Idea < ActiveRecord::Base

  def self.sort_by(idea_params)
    order = idea_params["sort_order"].to_i
    if order == 0
      Idea.order('created_at ASC')
    elsif order%2 == 0
      Idea.order('quality ASC')
    else
      Idea.order('quality DESC')
    end
  end
end
