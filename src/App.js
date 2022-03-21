import './App.css';
import './fonts/font.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import * as apiCalls from './services/api-calls'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';
import SongList from './pages/SongList/SongList';
import FossilDetails from './pages/FossilDetails/FossilDetails';
import VillagerDetails from './pages/VillagerDetails/VillagerDetails';
import SongDetails from './pages/SongDetails/SongDetails';
import NavBar from './components/NavBar/NavBar';
import SearchResults from './pages/SearchResults/SearchResults';
import FishList from './pages/FishList/FishList';

function App() {
  const navigate = useNavigate()
  const [villagers, setVillagers] = useState([])
  const [fossils, setFossils] = useState([])
  const [songs, setSongs] = useState([])
  const [bugs, setBugs] = useState([])
  const [artItems, setArtItems] = useState([])
  const [miscItems, setMiscItems] = useState([])
  const [fishes, setFishes] = useState([])
  const [wallmountedItems, setWallmountedItems] = useState([])
  const [housewares, setHousewares] = useState([])
  const [seaItems, setSeaItems] = useState([])


  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({villagers: [], songs: [], fossils: []})


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

  useEffect(()=> {
    
  }, [search])

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

  return (
    <>
      <main className='App'>
        <NavBar search={search} handleSubmitSearch={handleSubmitSearch} handleSetSearch={handleSetSearch} />
        <Routes>
          <Route path='/fossils' element={<FossilList fossils={fossils} />} />
          <Route path='/villagers' element={<VillagerList villagers={villagers} />} />
          <Route path='/songs' element={<SongList songs={songs} />} />
          <Route path='/fossil' element={<FossilDetails />} />
          <Route path='/villager' element={<VillagerDetails />} />
          <Route path='/song' element={<SongDetails />} />
          <Route path='/search' element={<SearchResults villagers={searchResults.villagers} songs={searchResults.songs} fossils={searchResults.fossils} fishes={searchResults.fishes}/>} />
          <Route path='/fishes' element={<FishList fishes={fishes} />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
