class Api::V1::GreetsController < ApplicationController
  def index
    @greet = Greet.find(rand(1..5))

    render json: [@greet]
  end
end