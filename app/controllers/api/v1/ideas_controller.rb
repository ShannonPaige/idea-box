class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.where(idea_params)
  end

  def create
    @idea = Idea.create(idea_params)
    respond_to do |format|
      format.json { render :json => @idea }  # note, no :location or :status options
    end
    # respond_with :api, :v1, @idea
  end

  def destroy
    byebug
  end


  private

    def idea_params
      params.permit(:id, :title, :body)
    end
end
