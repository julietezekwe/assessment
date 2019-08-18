# Phone Numbers API


## Introduction
An API the returns a set of phone numbers

## Table of Contents
1. <a href="#hosted-app">Link to Hosted App</a>
2. <a href="#pivotal-tracker">Link to Pivotal Tracker</a>
4. <a href="#application-features">Application Features</a>
5. <a href="#how-to-use">How To Use</a>
6. <a href="#author">Author</a>
7. <a href="#license">License</a>


## Link to Hosted App
* [API link](https://assessment-api-19.herokuapp.com/api/)

## Templates
* UI templates are hosted on Github pages [visit here](https://assessment-ui.herokuapp.com)


## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## API Documentation

[Api Documentation](https://store-manager-develop.herokuapp.com/api-docs)

## Application Features

*  Post a single number
*  Post bulk numbers
*  Get all numbers
*  Get a single number


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/julietezekwe/assessment

# Go into the repository
$ cd assessment

# Install dependencies
$ yarn install

# Create .env file for environmental variables in your root directory like the .env.example file


# Run the app
$ yarn start
```

## API endpoints
```
##USERS
POST Request -> localhost:9000/api/numbers
POST Request -> localhost:9000/api/numbers/bulk
GET Request -> localhost:9000/api/numbers/:id
GET Request -> localhost:9000/api/numbers

```

## Author

Chidimma Juliet Ezekwe

## License

ISC

---
