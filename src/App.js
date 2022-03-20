import './App.css';
import { Route, Routes } from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';
import SongList from './pages/SongList/SongList';
import FossilDetails from './pages/FossilDetails/FossilDetails';
import VillagerDetails from './pages/VillagerDetails/VillagerDetails';
import SongDetails from './pages/SongDetails/SongDetails';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <main className='App'>
        <NavBar />
        <Routes>
          <Route path='/fossils' element={<FossilList />} />
          <Route path='/villagers' element={<VillagerList />} />
          <Route path='/songs' element={<SongList />} />
          <Route path='/fossil' element={<FossilDetails />} />
          <Route path='/villager' element={<VillagerDetails />} />
          <Route path='/song' element={<SongDetails />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
