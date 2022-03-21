import Fossil from "../../components/Fossil/Fossil";
import { useState, useEffect } from "react";

const FossilList = ({fossils}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=> {
    const results = fossils.filter(fossil => fossil.name['name-USen'].includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  const handlePickRandomFossil = evt => {
    setSearch({query: fossils[Math.floor(Math.random() * fossils.length)].name['name-USen']})
  }

  return (
    <>
      <h2>Fossil List Page</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      <button onClick={handlePickRandomFossil}>
        Get Random
      </button>
      {search.query ? 
      <>
        <div className="fossil-container">
          {searchResults.map(fossil =>
            <Fossil key={fossil.image_uri} fossil={fossil} />
          )}
        </div>
      </>
      :
      <>
        <div className="fossil-container">
          {fossils.map(fossil =>
            <Fossil key={fossil.image_uri} fossil={fossil} />
          )}
        </div>
      </>
      }
    </>

    
    
  );
}

export default FossilList;