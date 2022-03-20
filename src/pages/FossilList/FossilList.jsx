import Fossil from "../../components/Fossil/Fossil";
import { useState, useEffect } from "react";
import { getFossils } from "../../services/api-calls";

const FossilList = (props) => {
const [fossils, setFossils] = useState([])
const [search, setSearch] = useState({query: ''})
const [searchResults, setSearchResults] = useState([])

useEffect(()=> {
  getFossils()
  .then(fossilData => setFossils(fossilData))
}, [])

useEffect(()=> {
  const results = fossils.filter(fossil => fossil['file-name'].includes(search.query))
  setSearchResults(results)
}, [search])

const handleSearch = evt => {
  setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
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