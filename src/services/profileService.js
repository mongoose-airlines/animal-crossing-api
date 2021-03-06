import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfile(id) {
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

function addVillager(villager) {
  return fetch(`${BASE_URL}/addVillager`, {
    method: "POST",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(villager)
  })
  .then(res => res.json())
}

function removeVillager(villagerName) {
  return fetch(`${BASE_URL}/${villagerName}`, {
    method: "PATCH",
    headers: { 
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  .then(res => res.json())
}


export { 
  getAllProfiles,
  getProfile,
  addVillager,
  removeVillager
}
