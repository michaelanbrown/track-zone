# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Coach.create(full_name: "Lance Cortez", age: 44, photo: "https://lrbears.com/images/2017/6/28/FrontPageTRACK47.jpg?width=1884&quality=80&format=jpg")
c2 = Coach.create(full_name: "Tiffany Hobbs", age: 28, photo: "https://ca-times.brightspotcdn.com/dims4/default/634e22d/2147483647/strip/true/crop/1024x576+0+0/resize/1200x675!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2F8e%2Ff914ab1078e5c7f842c9360968cf%2Fla-1521760377-bxelrypq1v-snap-image")
c3 = Coach.create(full_name: "Rodney Hale", age: 54, photo: "https://news.virginia.edu/sites/default/files/article_image/vic_lananna_header_3-2.jpg")

e1 = Event.create(name: "Boston Marathon", distance: "26.2", unit_of_measurement: "mi")
e2 = Event.create(name: "Run to Feed the Hungry", distance: "5", unit_of_measurement: "km")
e3 = Event.create(name: "Run to Feed the Hungry", distance: "10", unit_of_measurement: "km")

