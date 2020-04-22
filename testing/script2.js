const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        results: data,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  return {
    results: data,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
