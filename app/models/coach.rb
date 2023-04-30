class Coach < ApplicationRecord
    has_many :runners
    has_many :events, through: :runners

    validates :full_name, presence: true
    validates :age, numericality: { greater_than_or_equal_to: 18 }
end