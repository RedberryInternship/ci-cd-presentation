import axios from "axios";

export const getPlanets = async () =>
  await axios.get("https://swapi.dev/api/planets/");

export const getPeople = async () =>
  await (await fetch("https://swapi.dev/api/people/1/")).json();
