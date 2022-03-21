import { Link } from "react-router-dom";

const Fish = ({fish}) => {
  return (
    <>
    <Link
      to='/fish'
      state={{fish}}
      className='card-link'
    >
      <div className="fish">
        <img src={fish.icon_uri} alt="fish" />
        <p>{fish.name['name-USen']}</p>
      </div>
    </Link>
    </>
  );
}

export default Fish;