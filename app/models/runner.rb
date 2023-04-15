class Runner < ApplicationRecord
  belongs_to :coach
  belongs_to :event

  validates :full_name, presence: true, uniqueness: true
  validates :age, numericality: { greater_than_or_equal_to: 13 }
  validates :event_id, presence: true
  validates :username, presence: true, uniqueness: true

  has_secure_password
end