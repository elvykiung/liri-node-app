# liri-node-app

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Deployment](#Deployment)

## General info

LIRI is a _Language_ Interpretation and Recognition Interface app that takes in parameters from command line and gives you back data. It design to search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Liri take 4 commands:

### `concert-this` "artist/band name here"

which output

- Name of the venue
- Venue location
- Date of the Event

![screenshot](./gif/concert.GIF)

### `spotify-this-song` "song name here"

which output

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

p.s If no song is provided then Liri will default to "The Sign" by Ace of Base.

![screenshot](./gif/song.GIF)

### `movie-this` "movie name here"

which output

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

p.s If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![screenshot](./gif/movie.GIF)

### `do-what-it-says`

It will run any command that written in random.txt

![screenshot](./gif/do.GIF)

## Technologies

Project is created with:

- JavaScript
- Node.js
- NPM package

## Deployment

- Clone the repo and npm install week_10
- Portfolio link: https://elvykiung.github.io/
