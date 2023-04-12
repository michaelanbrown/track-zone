class Event < ApplicationRecord
    has_many :runners
    has_many :coaches, through: :runners
end