import { useState, useEffect } from 'react';
import Villager from "../../components/Villager/Villager";
import { getVillagers } from "../../services/api-calls";

const VillagerList = (props) => {
  const [villagers, setVillagers] = useState([])
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=> {
    getVillagers()
    .then(villagerData => setVillagers(villagerData))
  }, [])

  useEffect(()=> {
    const results = villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  return (
    <>
      <h2>Villager List</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      {search.query ? 
      <>
        <div className='villager-container'>
          {searchResults.map(villager =>
            <Villager key={villager.id} villager={villager}/>  
          )}
        </div>
      </>
      :
      <>
        <div className='villager-container'>
          {villagers.map(villager =>
            <Villager key={villager.id} villager={villager}/>  
          )}
        </div>
      </>

      }
    </>
  );
}

export default VillagerList;