[![Codeship Status for Crxssroad/off-the-rails](https://app.codeship.com/projects/175734d0-2363-0138-4e8b-3a3a8b9cedd9/status?branch=master)](https://app.codeship.com/projects/382962)

# Off the Rails

An "off the rails" Theme park review site.

## Authors
  * Braden Lawrence
  * Gabriel C. Encarnacion
  * Kennie Boulin
  * Sarah Fildes

## Dependancies
  * Ruby 2.6.5
  * Ruby-On-Rails 5.2.3
  * React 16.8.0
  * Devise
  * Carrierwave
  * Fog-AWS

## Setup Instructions
  1. `bundle install`
  2. `yarn install`
  3. `bundle exec rake db:create`
  4. `bundle exec rake db:migrate`
  5. `bundle exec rake db:seed`
  6. `rails s`
  7. In a separate tab, `yarn start`
  8. In a browser, visit, `http://localhost:3000`
