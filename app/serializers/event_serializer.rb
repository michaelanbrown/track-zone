class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :unit_of_measurement
  has_many :coaches, serializer: RunnersCoachSerializer

end