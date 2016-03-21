require 'rails_helper'

describe "the homepage" do

  let!(:idea1) { create(:idea) }
  let!(:idea2) { create(:idea) }

  it "shows all the ideas on the homepage" do
    visit '/'

    expect(page).to have_content "What's Your Idea"
  end

end
