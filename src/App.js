import './App.css';
import { Route, Routes } from 'react-router-dom'
import FossilList from './pages/FossilList/FossilList';
import VillagerList from './pages/VillagerList/VillagerList';

function App() {
  return (
    <>
      <h1>Sanity Check</h1>
      <a href="/fossils">To the fossils!</a><br/>
      <a href="/villagers">Villager List!</a>
      <Routes>
        <Route path='/fossils' element={<FossilList />} />
        <Route path='/villagers' element={<VillagerList />} />
      </Routes>
    </>
  );
}

export default App;
