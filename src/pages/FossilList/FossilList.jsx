import Fossil from "../../components/Fossil/Fossil";
import { useState, useEffect } from "react";
import { getFossils } from "../../services/api-calls";

const FossilList = (props) => {
const [fossils, setFossils] = useState()

useEffect(()=> {
  getFossils()
  .then(fossilData => console.log(fossilData))
}, [])

  return (
    <>
      <h2>Fossil List Page</h2>
      <Fossil />
    </>
  );
}

export default FossilList;