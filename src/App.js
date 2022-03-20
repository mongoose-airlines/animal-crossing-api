import './App.css';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import * as apiCalls from './services/api-calls'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';
import SongList from './pages/SongList/SongList';
import FossilDetails from './pages/FossilDetails/FossilDetails';
import VillagerDetails from './pages/VillagerDetails/VillagerDetails';
import SongDetails from './pages/SongDetails/SongDetails';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [villagers, setVillagers] = useState([])
  const [fossils, setFossils] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    apiCalls.getFossils()
    .then(fossilData => setFossils(fossilData))
    apiCalls.getSongs()
    .then(songData => setSongs(songData))
    apiCalls.getVillagers()
    .then(villagerData => setVillagers(villagerData))
  }, [])

  return (
    <>
      <main className='App'>
        <NavBar />
        <Routes>
          <Route path='/fossils' element={<FossilList fossils={fossils} />} />
          <Route path='/villagers' element={<VillagerList villagers={villagers} />} />
          <Route path='/songs' element={<SongList songs={songs} />} />
          <Route path='/fossil' element={<FossilDetails />} />
          <Route path='/villager' element={<VillagerDetails />} />
          <Route path='/song' element={<SongDetails />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
