class RunnerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :photo, :username, :email, :password_digest, :admin
  has_one :coach
  has_one :event
end
