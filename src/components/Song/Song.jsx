import { Link } from "react-router-dom";

const Song = ({song}) => {
  return (
    <Link
      to='/song'
      state={{song}}
      className='card-link'
    >
      <div className="song">
        <img src={song.image_uri} alt="album" />
        <h3>{song.name['name-USen']}</h3>
      </div>
    </Link>
  );
}
 
export default Song;