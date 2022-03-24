import Song from "../../components/Song/Song";
import Villager from "../../components/Villager/Villager";
import Fossil from "../../components/Fossil/Fossil";
import Fish from "../../components/Fish/Fish";

const SearchResults = ({songs, villagers, fossils, fishes, handleAddVillager, profile, handleRemoveVillager}) => {
  return (
    <>
      {fossils.length ?
        <>
          <h2>Matching Fossils ({fossils.length}):</h2>
          <div className="fossil-container">
            {fossils.map(fossil =>
              <Fossil key={fossil.image_uri} fossil={fossil} />
              )}
          </div>
        </>
        :
        <>
          <h2>No Matching Fossils</h2>
        </>
      }
      {villagers.length ?
        <>
          <h2>Matching Villagers ({villagers.length}):</h2>
          <div className='villager-container'>
            {villagers.map(villager =>
              <Villager handleRemoveVillager={handleRemoveVillager} profile={profile} handleAddVillager={handleAddVillager} key={villager.id} villager={villager}/>  
              )}
          </div>
        </>
        :
        <>
          <h2>No Matching Villagers</h2>
        </>
      }
      {songs.length ?
        <>
          <h2>Matching Songs ({songs.length}):</h2>
          <div className="song-container">
            {songs.map(song => 
              <Song key={song.id} song={song} />
            )}
          </div>
        </>
        :
        <>
          <h2>No Matching Songs</h2>
        </>
      }
      {fishes.length ?
        <>
          <h2>Matching Fish ({fishes.length}):</h2>
          <div className="song-container">
            {fishes.map(fish => 
              <Fish key={fish.id} fish={fish} />
            )}
          </div>
        </>
        :
        <>
          <h2>No Matching Fish</h2>
        </>
      }
    </>
  );
}
 
export default SearchResults;