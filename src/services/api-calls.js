const baseUrl = 'http://acnhapi.com/v1'

export function getFossils() {
  return fetch(`${baseUrl}/fossils`)
  .then(res => res.json())
}