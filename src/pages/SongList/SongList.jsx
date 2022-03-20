import Song from "../../components/Song/Song";
import { useState, useEffect } from 'react';

const SongList = ({songs}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=> {
    const results = songs.filter(song => song.name['name-USen'].toLowerCase().includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }

  const handlePickRandomSong = evt => {
    setSearch({query: songs[Math.floor(Math.random() * songs.length)].name['name-USen'].toLowerCase()})
  }

  return (
    <>
      <h2>Songs</h2>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      <button onClick={handlePickRandomSong}>
        Get Random
      </button>
      {search.query ? 
        <>
          <div className="song-container">
            {searchResults.map(song => 
              <Song key={song.id} song={song} />
            )}
          </div>
        </>
        :
        <>
          <div className="song-container">
            {songs.map(song => 
              <Song key={song.id} song={song} />
            )}
          </div>
        </>
      }
    </>
  );
}
 
export default SongList;