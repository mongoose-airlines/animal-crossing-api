const baseUrl = 'https://acnhapi.com/v1a'

function getFossils() {
  return fetch(`${baseUrl}/fossils`)
  .then(res => res.json())
}

function getVillagers() {
  return fetch (`${baseUrl}/villagers`)
  .then(res => res.json())
}

function getSongs() {
  return fetch (`${baseUrl}/songs`)
  .then(res => res.json())
}

function getFish() {
  return fetch (`${baseUrl}/fish`)
  .then(res => res.json())
}

function getArt() {
  return fetch (`${baseUrl}/art`)
  .then(res => res.json())
}

function getHousewares() {
  return fetch (`${baseUrl}/houseware`)
  .then(res => res.json())
}

function getWallmounted() {
  return fetch (`${baseUrl}/wallmounted`)
  .then(res => res.json())
}

function getMisc() {
  return fetch (`${baseUrl}/misc`)
  .then(res => res.json())
}

function getBugs() {
  return fetch (`${baseUrl}/bugs`)
  .then(res => res.json())
}

function getSea() {
  return fetch (`${baseUrl}/sea`)
  .then(res => res.json())
}

export {
  getFossils,
  getVillagers,
  getSongs,
  getFish,
  getArt,
  getHousewares,
  getWallmounted,
  getMisc,
  getBugs,
  getSea
}