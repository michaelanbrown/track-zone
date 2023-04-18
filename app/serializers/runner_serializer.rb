class RunnerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :photo, :username, :email, :password_digest, :admin
  has_one :coach, serializer: RunnersCoachSerializer
  has_one :event, serializer: RunnersEventSerializer
end
