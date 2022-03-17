const baseUrl = 'https://acnhapi.com/v1a'

function getFossils() {
  return fetch(`${baseUrl}/fossils`)
  .then(res => res.json())
}

function getVillagers() {
  return fetch (`${baseUrl}/villagers`)
  .then(res => res.json())
}

export {
  getFossils,
  getVillagers
}