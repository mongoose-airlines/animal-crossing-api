import './App.css';
import { Route, Routes } from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';
import SongList from './pages/SongList/SongList';
import FossilDetails from './pages/FossilDetails/FossilDetails';
import VillagerDetails from './pages/VillagerDetails/VillagerDetails';

function App() {
  return (
    <>
      <h1>Sanity Check</h1>
      <a href="/fossils">To the fossils!</a><br/>
      <a href="/villagers">Villager List!</a><br />
      <a href="/songs">Dat music</a>
      <Routes>
        <Route path='/fossils' element={<FossilList />} />
        <Route path='/villagers' element={<VillagerList />} />
        <Route path='/songs' element={<SongList />} />
        <Route path='/fossil' element={<FossilDetails />} />
        <Route path='/villager' element={<VillagerDetails />} />
      </Routes>
    </>
  );
}

export default App;
