# TextAPIary

*Daily Direct-to-Database Diary!*

## Getting Started

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

## Use/Deployment

SMS COMMANDS  
Post, "[ENTRY]"  
  Creates a text entry in the database with value ENTRY
Get, id, [IDNUM]    
  Retrieve entry and send back to end-user
  
Put, [IDNUM], "[ENTRY]"  
  Replaces the text of the entry with new value of ENTRY
  
Delete, [IDNUM]  
  Removes the entry with id IDNUM  
  
Help
  displays commands*
  
Send test commands to test server at +19892560937


## Authors

* **Tobia Giachetti** - [tgiachett](https://github.com/tgiachett)
* **Bettina Junghahn** - [bettijung](https://github.com/bettijung)
* **Paula Peroutka** - [paulaperoutka](https://github.com/paulaperoutka)
* **Alexander Florian-Prescott** - [EPluribusAlex](https://github.com/EPluribusAlex)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Made possible with Zang, an Avaya company.
