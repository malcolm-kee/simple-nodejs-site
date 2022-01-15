const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require('fs');

const dataFile = path.resolve(__dirname, 'movies.json');

const getMovies = () => {
  if (existsSync(dataFile)) {
    return fs.readFile(dataFile, 'utf-8').then((raw) => JSON.parse(raw));
  }
  return Promise.resolve([]);
};

exports.getMovies = getMovies;

const getOneMovie = (id) => {
  return getMovies().then((movies) => movies.find((movie) => movie.id === id));
};

exports.getOneMovie = getOneMovie;
