import './App.css';
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

function App() {
  const navigate = useNavigate()
  const [villagers, setVillagers] = useState([])
  const [fossils, setFossils] = useState([])
  const [songs, setSongs] = useState([])
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({villagers: [], songs: [], fossils: []})


  useEffect(() => {
    apiCalls.getFossils()
    .then(fossilData => setFossils(fossilData))
    apiCalls.getSongs()
    .then(songData => setSongs(songData))
    apiCalls.getVillagers()
    .then(villagerData => setVillagers(villagerData))
  }, [])

  useEffect(()=> {
    
  }, [search])

  const handleSubmitSearch = evt => {
    setSearchResults({
      fossils: fossils.filter(fossil => fossil['file-name'].includes(search.query)),
      songs: songs.filter(song => song.name['name-USen'].toLowerCase().includes(search.query)),
      villagers: villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(search.query))
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
          <Route path='/search' element={<SearchResults villagers={searchResults.villagers} songs={searchResults.songs} fossils={searchResults.fossils} />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
