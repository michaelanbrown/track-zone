class RunnerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :photo, :username, :email, :admin
  has_one :coach, serializer: RunnersCoachSerializer
  has_one :event
end
