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
      <h2>Song list component</h2>
    </>
  );
}
 
export default SongList;