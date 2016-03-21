class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.where(idea_params)
  end

  private

    def idea_params
      params.permit(:id, :name, :body, :quality)
    end
end
