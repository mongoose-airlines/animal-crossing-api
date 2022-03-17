const Song = (props) => {
  return (
    <div className="song">
      <img src={props.song.image_uri} alt="album" />
      <h2>{props.song.name['name-USen']}</h2>
      <video controls autoplay>
        <source src={props.song.music_uri} type="audio/mpeg" />
      </video>
    </div>
  );
}
 
export default Song;