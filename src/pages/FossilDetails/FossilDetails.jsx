import { useLocation } from "react-router-dom";

const FossilDetails = () => {
  const location = useLocation()
  const fossil = location.state.fossil
  return (
    <>
      <h2>Fossil Details</h2>
      <img src={fossil.image_uri} alt="fossil" />
      <h3>{fossil.name['name-USen']}</h3>
      <h3>{fossil.price} 🔔</h3>
      <p>{fossil['museum-phrase']}</p>
    </>
  );
}
 
export default FossilDetails;