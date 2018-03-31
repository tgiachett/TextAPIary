# TextAPIary

*Daily Direct-to-Database Diary!*

## Getting Started

```
*These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.*
```

### Prerequisites

```
*Give an example*
```

### Installing

#### Node Modules

*Run `npm install` in the console from the root folder to automatically install the following packages.*

* body-parser
* dotenv
* express
* express-handlebars
* handlebars
* mysql2
* sequelize

#### Environmental Variables

*Create a `.env` file in the root folder with the necessary information for local testing with MySQL. See `./docs/.env.example` for how it should look.*

*For Heroku deployment, the following environemntal variables must be configured:*

* DATABASE_URL: *your postgress database url*
* NODE_ENV: production

*the next three are according to your Zang or equivalent text service credentials*
* ZAUTHTOKEN
* ZNUM
* ZSID

## Running the tests

*The assertion library used for this project is Chai. The test runner is Mocha.*

*Developers: Install the latest chai and mocha devdepencies and then type mocha in your CLI to see pass/fail test results.*

### Break down into end to end tests

### And coding style tests

## Use/Deployment

*Add additional notes about how to deploy this on a live system
TEXT COMMANDS
POST, TEXT, [TAG]
  Creates a text entry in the database with value TEXT with an optional keyword with value TAG
GET, ID, IDNUM
  Sends SMS back to SMS end-user of entry with id IDNUM
PUT, IDNUM, TEXT
  Replaces the text of the entry with the value of TEXT
DELETE, IDNUM
  Removes the entry with id IDNUM
HELP
  displays commands*

## Built With


## Contributing


## Versioning


## Authors

* **Tobia Giachetti** - [tgiachett](https://github.com/tgiachett)
* **Bettina Junghahn** - [bettijung](https://github.com/bettijung)
* **Paula Peroutka** - [paulaperoutka](https://github.com/paulaperoutka)
* **Alexander Florian-Prescott** - [EPluribusAlex](https://github.com/EPluribusAlex)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Made possible with Zang, an Avaya company.