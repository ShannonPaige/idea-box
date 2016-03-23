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

  describe "POST #create" do
    it "returns http success" do
      get :create, format: :json, title: 'New Title', body: 'New Body'
      expect(response).to have_http_status(:success)
    end

    it "returns one object" do
      get :create, format: :json, title: 'New Title', body: 'New Body'
      assert_kind_of Hash, json_response
    end

    it "returns the correct object" do
      get :create, format: :json, title: 'New Title', body: 'New Body'

      assert_equal "New Title", json_response["title"]
      assert_equal "New Body", json_response["body"]
      assert_equal "swill", json_response["quality"]
    end
  end

  describe "PATCH #update" do
    it "returns http success" do
      get :update, format: :json, id: idea2.id, title: 'New Title', body: 'New Body'
      expect(response).to have_http_status(:success)
    end

    it "returns one object" do
      get :update, format: :json, id: idea2.id, title: 'New Title', body: 'New Body'
      assert_kind_of Hash, json_response
    end

    it "returns the correct object" do
      get :update, format: :json, id: idea2.id, title: 'New Title', body: 'New Body'

      assert_equal "New Title", json_response["title"]
      assert_equal "New Body", json_response["body"]
      assert_equal "swill", json_response["quality"]
    end
  end

  describe "DELETE #destroy" do
    it "returns http success" do
      get :destroy, format: :json, id: idea1.id
      expect(response).to have_http_status(:success)
    end

    it "returns one object" do
      get :destroy, format: :json, id: idea1.id
      assert_kind_of Hash, json_response
    end

    it "returns the correct object" do
      get :destroy, format: :json, id: idea1.id

      assert_equal idea1.title, json_response["title"]
      assert_equal idea1.body, json_response["body"]
      assert_equal idea1.quality, json_response["quality"]
    end
  end

end
