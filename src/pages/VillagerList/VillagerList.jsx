import { useState, useEffect } from 'react';
import Villager from "../../components/Villager/Villager";

const VillagerList = ({villagers, handleAddVillager}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=> {
    const results = villagers.filter(villager => villager.name['name-USen'].toLowerCase().includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  const handlePickRandomVillager = evt => {
    setSearch({query: villagers[Math.floor(Math.random() * villagers.length)].name['name-USen'].toLowerCase()})
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
      <button className="btn btn-success" onClick={handlePickRandomVillager}>
        Get Random
      </button>
      {search.query ? 
      <>
        <div className='villager-container'>
          {searchResults.map(villager =>
            <Villager handleAddVillager={handleAddVillager} key={villager.id} villager={villager}/>  
          )}
        </div>
      </>
      :
      <>
        <div className='villager-container'>
          {villagers.map(villager =>
            <Villager handleAddVillager={handleAddVillager} key={villager.id} villager={villager}/>  
          )}
        </div>
      </>

      }
    </>
  );
}

export default VillagerList;