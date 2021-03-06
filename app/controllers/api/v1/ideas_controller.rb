class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with :api, :v1, Idea.sort_by(idea_params)
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def update
    respond_with :api, :v1, Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with :api, :v1, Idea.destroy(params[:id])
  end


  private

    def idea_params
      params.permit(:id, :title, :body, :quality, :sort_order)
    end
end
