const Fossil = (props) => {
  return (
    <>
      <div className="fossil">
        <img src={props.fossil.image_uri} alt="fossil" />
        <h2>{props.fossil['file-name']}</h2>
        <h3>Price: {props.fossil.price}</h3>
        <p>{props.fossil['museum-phrase']}</p>
      </div>
    </>
  );
}

export default Fossil;