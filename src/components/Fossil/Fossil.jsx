import { Link } from "react-router-dom";

const Fossil = ({fossil}) => {
  return (
    <>
    <Link
      to='/fossil'
      state={{fossil}}
      className='card-link'
    >
      <div className="fossil">
        <img src={fossil.image_uri} alt="fossil" />
        <h2>{fossil.name['name-USen']}</h2>
      </div>
    </Link>
    </>
  );
}

export default Fossil;