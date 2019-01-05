# Word Square

https://edwardscam.github.io/word-square/

Given a list of words (currently hardcoded), produce the largest possible
[Word Square](https://en.wikipedia.org/wiki/Word_square).

It does not have to include every word provided.
Just whatever makes the biggest square (or rectangle).

## Requirements
* Node >= 1.0
* npm

## Setup
* `npm install`
* `npm start`
* open http://localhost:8080/

## Testing
* `npm test`
* Tests are in `src/\*\*/\_\_tests\_\_/\*.test.js`

## TODO
* Allow user to enter words
* Allow user to configure delay
* Make pretty
* Cool graphics showing which tile it's working on, and what letter it's considering.

## Known bugs
* If you have words that contain other words in the list,
it will not consider the shorter ones.
e.g. 'crap' and 'crapshoot', the first will get ignored.
