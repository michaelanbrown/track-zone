class Event < ApplicationRecord
    has_many :runners
    has_many :coaches, through: :runners

    validates :name, presence: true
    validates :distance, numericality: { greater_than: 0 }
    validates :unit_of_measurement, presence: true, inclusion: { in: %w(km mi m) }
end