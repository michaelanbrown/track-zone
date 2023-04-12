class Coach < ApplicationRecord
    has_many :runners
    has_many :events, through: :runners
end