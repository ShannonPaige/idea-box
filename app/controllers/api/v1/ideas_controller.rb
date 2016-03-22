class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.where(idea_params)
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
  end

  def destroy
    respond_with :api, :v1, Idea.destroy(params[:id])
  end


  private

    def idea_params
      params.permit(:id, :title, :body)
    end
end
