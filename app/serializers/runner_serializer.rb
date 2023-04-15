class RunnerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :photo, :username, :email, :password_digest, :admin
  has_one :coach_id
  has_one :event_id
end
