class Runner < ApplicationRecord
  belongs_to :coach_id
  belongs_to :event_id
end
