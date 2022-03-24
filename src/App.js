import './App.css';
import './fonts/font.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, NavLink, Navigate } from 'react-router-dom'
import * as apiCalls from './services/api-calls'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';
import SongList from './pages/SongList/SongList';
import FossilDetails from './pages/FossilDetails/FossilDetails';
import VillagerDetails from './pages/VillagerDetails/VillagerDetails';
import SongDetails from './pages/SongDetails/SongDetails';
import NavBar from './components/NavBar/NavBar';
import SearchResults from './pages/SearchResults/SearchResults';
import FishList from './pages/FishList/FishList';
import FishDetails from './pages/FishDetails/FishDetails';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Collection from './pages/Collection/Collection';

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [villagers, setVillagers] = useState([])
  const [fossils, setFossils] = useState([])
  const [songs, setSongs] = useState([])
  const [fishes, setFishes] = useState([])
  // const [bugs, setBugs] = useState([])
  // const [artItems, setArtItems] = useState([])
  // const [miscItems, setMiscItems] = useState([])
  // const [wallmountedItems, setWallmountedItems] = useState([])
  // const [housewares, setHousewares] = useState([])
  // const [seaItems, setSeaItems] = useState([])


  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({villagers: [], songs: [], fossils: [], fishes: []})

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.profile)
      .then(profileData => {
        setProfile(profileData)
      })
    }
  }, [user])

  useEffect(() => {
    apiCalls.getFossils()
    .then(fossilData => setFossils(fossilData))
    apiCalls.getSongs()
    .then(songData => setSongs(songData))
    apiCalls.getVillagers()
    .then(villagerData => setVillagers(villagerData))
    apiCalls.getFish()
    .then(fishData => setFishes(fishData))
    // apiCalls.getBugs()
    // .then(bugData => setBugs(bugData))
    // apiCalls.getArt()
    // .then(artData => setArtItems(artData))
    // apiCalls.getMisc()
    // .then(miscData => setMiscItems(miscData))
    // apiCalls.getWallmounted()
    // .then(wallmountedData => setWallmountedItems(wallmountedData))
    // apiCalls.getHousewares()
    // .then(housewareData => setHousewares(housewareData))
    // apiCalls.getSea()
    // .then(seaData => setSeaItems(seaData))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleSubmitSearch = evt => {
    setSearchResults({
      fossils: fossils.filter(fossil => fossil.name['name-USen'].includes(search.query)),
      songs: songs.filter(song => song.name['name-USen'].toLowerCase().includes(search.query)),
      villagers: villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(search.query)),
      fishes: fishes.filter(fish => fish.name['name-USen'].toLowerCase().includes(search.query))
    })
    navigate('/search')
  }

  const handleSetSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }

  const handleAddVillager = villager => {
    profileService.addVillager(villager)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  const handleRemoveVillager = id => {
    profileService.removeVillager(id)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  return (
    <>
      <main className='App'>
        <NavBar handleLogout={handleLogout} user={user} search={search} handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch} />
        <Routes>
          <Route path='/fossils' element={<FossilList fossils={fossils} />} />
          <Route path='/villagers' element={
            <VillagerList 
              villagers={villagers} 
              handleAddVillager={handleAddVillager}
              handleRemoveVillager={handleRemoveVillager}
              profile={profile}
            />} 
          />
          <Route path='/songs' element={<SongList songs={songs} />} />
          <Route path='/fossil' element={<FossilDetails />} />
          <Route path='/villager' element={<VillagerDetails />} />
          <Route path='/song' element={<SongDetails />} />
          <Route path='/search' element={
            <SearchResults 
              handleAddVillager={handleAddVillager}
              handleRemoveVillager={handleRemoveVillager}
              profile={profile} 
              villagers={searchResults.villagers} 
              songs={searchResults.songs} 
              fossils={searchResults.fossils} 
              fishes={searchResults.fishes}
            />} 
          />
          <Route path='/fishes' element={<FishList fishes={fishes} />} />
          <Route path='/fish' element={<FishDetails />} />
          <Route
            path="/login"
            element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
            path="/changePassword"
            element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
          />
          <Route 
            path='/profile'
            element={<Collection handleAddVillager={handleAddVillager} handleRemoveVillager={handleRemoveVillager} profile={profile} />}
          />
        </Routes>

      </main>
    </>
  );
}

export default App;
