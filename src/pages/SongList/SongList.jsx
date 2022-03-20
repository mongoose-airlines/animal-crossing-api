import Song from "../../components/Song/Song";
import { useState, useEffect } from 'react';
import { getSongs } from "../../services/api-calls";

const SongList = (props) => {
  const [songs, setSongs] = useState([])
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    getSongs()
    .then(songData => setSongs(songData))
  })


  useEffect(()=> {
    const results = songs.filter(song => song.name['name-USen'].toLowerCase().includes(search.query))
    setSearchResults(results)
  }, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
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