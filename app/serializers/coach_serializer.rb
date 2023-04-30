class CoachSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :photo
  has_many :events

end
