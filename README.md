# Track Zone!

## Models

I have incldued three models:
1. Runners
2. Coaches
3. Events

### Runners

The Runners model belongs_to :coach and belongs_to :event.

### Coaches

The Coaches model has_many :runners and has_many :events, through: :runners.

### Events

The Events model has_many :runners and has_many :coaches, through: :runners.

## Validations

### Runners

The Runners model validates:
1. :full_name, presence: true, uniqueness: true
2. :age, numericality: { greater_than_or_equal_to: 13 }
3. :event_id, presence: true
4. :username, presence: true, uniqueness: true
5. :coach_id, presence: true
6. :email, presence: true

### Coaches

The Coaches model validates:
1. :full_name, presence: true, uniqueness: true
2. :age, numericality: { greater_than_or_equal_to: 18 }

### Events

The Events model validates:
1. :name, presence: true
2. :distance, numericality: { greater_than: 0 }
3. :unit_of_measurement, presence: true, inclusion: { in: %w(km mi m) }

## Schemas

### Runner

The Runner schema contains all pertinent information about each runner including full name, age, username, email, password, their coach's id, their event's id, if the runner is an admin, and a photo. They connect to their coach and event via the columns below:

```bash
t.integer "coach_id"
```
```bash
t.index ["coach_id"], name: "index_runners_on_coach_id"
```
```bash
t.integer "event_id"
```
```bash
t.index ["event_id"], name: "index_runners_on_event_id"
```

### Coach

The Coach schema contains all pertinent information about each coach including their full name, age, and a photo.

### Event

The Event schema contains all pertinent information about each event including the name, distance, and unit of measurement.

## Description

Track Zone allows runners to connect and display their proud accomplishments through photos and event listings.
Runner can also view different coaches and gain an idea of how their future may look if they are to pick a different coach.

## Method Examples

```python
# Index
  def index
      render json: Runner.all.order(:id), status: :ok
  end
```

```python
# Show
  def show
      render json: current_runner, status: :ok
  end
```

```python
# Create Request
  def create
      event = Event.create!(event_params)
      render json: event, status: :created
  end
```

```python
# Update Request
  def update
      runner = Runner.find(params[:id])
      if current_runner.admin
          runner.update!(admin_runner_params)
      else
          runner.update!(runner_params)
      end
      render json: runner, status: :accepted
  end
```

```python
# Delete Request
  def destroy
      runner = Runner.find(params[:id])
      runner.destroy
      head :no_content 
  end 
```

## Routes

```python
# All Used Routes
  resources :runners
  resources :events, only: [:index, :create, :destroy]
  resources :coaches, only: [:index, :create, :destroy]

  post "/login", to: "sessions#create" 
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "runners#show"
```

## Fork and Clone

Feel free to fork and clone this to use as your own!
Be aware of the seeded data.

## Contributing

Suggestions are welcome.