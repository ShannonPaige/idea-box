require 'rails_helper'

describe "the model" do

  let!(:idea1) { create(:idea) }
  let!(:idea2) { create(:idea, quality: 'genius') }
  let!(:idea3) { create(:idea, quality: 'plausible') }

  it "creates an idea with correct parameters" do
    expect(idea1.title).to eq("Amazing Idea")
    expect(idea1.body).to eq("Describe an amazing idea")
    expect(idea1.quality).to eq("swill")
  end

  it "defaults to swill when not given a quality" do
    idea4 = Idea.create(title: "Title 2", body: "Description 2")

    expect(idea4.quality).to eq("swill")
  end

  it "sorts by created_at when given the string of 0" do
    ideas = Idea.sort_by({"sort_order" => "0"})

    expect(ideas.first).to eq(idea1)
    expect(ideas.last).to eq(idea3)
  end

  it "sorts by quality ASC when given even number" do
    ideas = Idea.sort_by({"sort_order" => 2})

    expect(ideas.first).to eq(idea2)
    expect(ideas.last).to eq(idea1)
  end

  it "sorts by quality DESC when given odd number" do
    ideas = Idea.sort_by({"sort_order" => 3})

    expect(ideas.first).to eq(idea1)
    expect(ideas.last).to eq(idea2)
  end

end
