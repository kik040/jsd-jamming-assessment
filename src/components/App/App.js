import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../utils/Spotify";
import React, { useState ,useEffect} from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [playListName, setPlayListName] = useState("My PlayList");
  const [playListTracks, setPlayListTracks] = useState([]);

  const addTrack = (track) => {
    if (playListTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlayListTracks([...playListTracks, track]);
  };
  const removeTrack = (track) =>{
    setPlayListTracks(
      playListTracks.filter(currentTrack => currentTrack.id !== track.id)
    );
  }
  const updatePlayListName = (name) => {
    setPlayListName(name);
  }
  const savePlayList = () =>{
 //   const trackUris = playListTracks.map((track) => track.uri);
    Spotify.savePlaylist(playListName,playListTracks).then(() => {
      setPlayListTracks([]);
      setPlayListName('New PlayList');
    })
  }
  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    })
  }

  useEffect (() => {
    Spotify.getAccessToken();
  },[]);


  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playListName={playListName}
            playListTracks={playListTracks}
            onRemove={removeTrack}
            onNameChange={updatePlayListName}
            onSave={savePlayList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
