class RunnersEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :unit_of_measurement
end
