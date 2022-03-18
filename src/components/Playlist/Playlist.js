import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {

  const handlNameChange = (e) =>{
    props.onNameChange(e.target.value);
  }
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handlNameChange}/>
      <TrackList tracks={props.playListTracks} 
                  onRemove={props.onRemove}
                  isRemoval={true}/>
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
