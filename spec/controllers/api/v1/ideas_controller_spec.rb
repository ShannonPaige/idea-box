require 'rails_helper'

describe Api::V1::IdeasController, type: :controller do

  let!(:idea1) { create(:idea) }
  let!(:idea2) { create(:idea) }

  describe "GET #index" do
    it "returns http success" do
      get :index, format: :json
      expect(response).to have_http_status(:success)
    end

    it "returns an array of objects" do
      get :index, format: :json
      assert_kind_of Array, json_response
    end

    it "returns the correct number of objects" do
      get :index, format: :json
      assert_equal Idea.count, json_response.count
    end

    it "returns the correct objects" do
      get :index, format: :json
      object1 = json_response.first
      object2 = json_response.last

      assert_equal idea1.title, object1["title"]
      assert_equal idea1.body, object1["body"]
      assert_equal idea1.quality, object1["quality"]
      assert_equal idea2.title, object2["title"]
      assert_equal idea2.body, object2["body"]
      assert_equal idea2.quality, object2["quality"]

    end

  end

end
