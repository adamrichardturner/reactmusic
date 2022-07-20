import { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation";
import LastFM from "./util/LastFM"
import './App.css';

function App() {
  const [topArtists, setTopArtists] = useState({
    artists: []
  });
  useEffect(() => {
    const getTopArtists = async () => {
      const artists = await LastFM.getTopArtists();
      setTopArtists({
        artists: artists.artists.artist
      });
    } 
    getTopArtists();
  },[]);

  const [topTracks, setTopTracks] = useState({
    tracks: []
  });
  useEffect(() => {
    const getTopTracks = async () => {
      const tracks = await LastFM.getTopTracks();
      setTopTracks({
        tracks: tracks.tracks.track
      })
    }
    getTopTracks();
  }, []);

  return (
    <div className="App">
      <Navigation
        topArtists={topArtists}
        topTracks={topTracks}
      />
    </div>
  );
}

export default App;
