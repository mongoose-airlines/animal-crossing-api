import { useLocation } from "react-router-dom";

const SongDetails = () => {
  const location = useLocation()
  const song = location.state.song

  return (
    <>
      <div className="song-details">
      <img src={song.image_uri} alt="album" />
      <h2>{song.name['name-USen']}</h2>
      <video controls autoplay>
        <source src={song.music_uri} type="audio/mpeg" />
      </video>
    </div>
    </>
  );
}
 
export default SongDetails;