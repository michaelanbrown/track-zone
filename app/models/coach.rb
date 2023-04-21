class Coach < ApplicationRecord
    has_many :runners
    has_many :events, through: :runners

    validates :full_name, presence: true, uniqueness: true
end