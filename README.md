# World Recipes

This Rails-Angular App is an application that contains and displays recipes created by users. After signing up and logging in, the user can create recipes and add existing recipes to their favorites.

The app runs on Rails 5.0.0.1 and Devise 4.2.0. Gems used include responders, bower-rails (with angular-devise and angular-ui-router as dependencies), and angular-rails-templates. Rails uses PostgreSQL to handle the database in the backend.

## Installation

If you haven't yet, install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](http://bundler.io/#getting-started).

Then, run the following in your command line:

```
git clone https://github.com/auranbuckles/world-recipes.git
cd world-recipes
bundle install
rails db:create
rails db:migrate
rails db:seed
```

Then, run `rails s` to start up a local server and view the app at `localhost:3000` in your browser.

## Contributor's Guide

Third party contributions are always welcome! To flag an issue, file a ticket on [world-recipes issues](https://github.com/auranbuckles/world-recipes/issues), and provide a detailed explanation of the issue(s). Your feedback is very much appreciated.

## License

Copyright (c) 2016 auranbuckles
