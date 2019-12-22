# eat-dat-burger

# Description

This project is a Full Stack web application that allows users to create new records in a database (a burger they want to eat), display them in an HTML page and then updated those same records (indicate that they have eaten the burger).

The app is written using `HTML`, `CSS`, and `JavaScript` for the frontend; and `NodeJS`, and `SQL` for the backend.

It uses  `Express-Handlebars` to render the `HTML` content, `Express` to build the server, and `mysql` to create and manage the database .

![eat-dat-burger in action]( https://content.screencast.com/users/nrt.damian/folders/Snagit/media/ce6dd3f8-1160-40ad-8e99-91f0978ca782/12.22.2019-13.07.GIF)



# Content

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [Planned upgrades](#Planned upgrades)
- [License](#License)
- [Contribution](#Contribution)

# Installation

To start using this app you can visit  https://eat-da-burger-or-die.herokuapp.com/.

### Local development

For local development [clone or download this repo]( https://github.com/jondam1985/eat-dat-burger).

To install all the dependencies run `npm install --save` when in the project folder.

To install the dependencies individually run:

- `npm install express` for Express
- `npm install express-handlebars` for Express-Handlebars
- `npm install mysql` for mysql
- `npm install nodemon --dev` for nodemon

You need to create the database to run the app. Use the `schema.sql` and `seeder.sql` files to create the database and its table.

To connect to the database modify the _connection string_ in the `connection.js` accordingly to your configuration.

To start the server run `npm start` and navigate to your `localhost:PORT`.

__* Please note that the local port for the app is set to 3000. Update this in the `server.js` file if you encounter problems with that port *__

# Usage

To `add a new burger` to the list type the name in the text input field and click `submit`.

To `devour` a burger (move it from the list on the left to the list on the right) click on the `devour button` corresponding to the selected burger. 

# Credits

### Author

This project was created by [Damian Ruiz](https://github.com/jondam1985) as a project assignment for the [UofT Full Stack Coding Bootcamp]( https://bootcamp.learn.utoronto.ca/coding/).

### Dependencies

- Server created with [Express]( https://www.npmjs.com/package/express )
- Views created with [Express-Handlebars]( https://www.npmjs.com/package/express-handlebars )
- Database and connection created with [mysql]( https://www.npmjs.com/package/mysql)
- Development support provided by [nodemon]( https://www.npmjs.com/package/nodemon)
- Web app hosting provided by [Heroku](https://heroku.com)
- Production database hosted by [JawsDB]( https://www.jawsdb.com/ )

# Planned Upgrades

- The project will be structured as a VMC project in future iterations.
- Functionality to delete burgers from the database will be added.

# License

This project is licensed under the MIT license. Please see [LICENSE](./LICENSE) file for details.

# Contribution

Please feel free to use and update this project as you see fit. Implementing the [planned upgrades](#planned upgrades) would be a great place to start.

If you want to discuss this project or any of my other projects <a href="mailto:nrt.damian@gmail.com">please send me an email</a> or follow me at https://github.com/jondam1985.