import Fish from "../../components/Fish/Fish";
import { useState, useEffect } from "react";

const FishList = ({fishes}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=> {
    const results = fishes.filter(fish => fish.name['name-USen'].includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  const handlePickRandomFish = evt => {
    setSearch({query: fishes[Math.floor(Math.random() * fishes.length)].name['name-USen']})
  }

  return (
    <>
      <h2>Fish List Page</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      <button className="btn btn-success" onClick={handlePickRandomFish}>
        Get Random
      </button>
      {search.query ? 
      <>
        <div className="fish-container">
          {searchResults.map(fish =>
            <Fish key={fish.image_uri} fish={fish} />
          )}
        </div>
      </>
      :
      <>
        <div className="fish-container">
          {fishes.map(fish =>
            <Fish key={fish.image_uri} fish={fish} />
          )}
        </div>
      </>
      }
    </>

    
    
  );
}

export default FishList;