import React, { useState, useEffect } from 'react';
import Villager from "../../components/Villager/Villager";
import { getVillagers } from "../../services/api-calls";

const VillagerList = (props) => {
  const [villagers, setVillagers] = useState([])

  useEffect(()=> {
    getVillagers()
    .then(villagerData => setVillagers(villagerData))
  }, [])
  return (
    <>
      <h2>Villager List</h2>
      <div className='villager-container'>
        {villagers.map(villager =>
        <Villager key={villager.id} villager={villager}/>  
        )}
      </div>
    </>
  );
}

export default VillagerList;