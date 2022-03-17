import Song from "../../components/Song/Song";
import React, { useState, useEffect } from 'react';
import { getSongs } from "../../services/api-calls";

const SongList = (props) => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs()
    .then(songData => setSongs(songData))
  })
  return (
    <>
      <h2>Songs</h2>
      <div className="song-container">
        {songs.map(song => 
          <Song key={song.id} song={song} />
        )}
      </div>
    </>
  );
}
 
export default SongList;