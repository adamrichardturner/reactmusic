import ArtistCard from "../artistCard/ArtistCard"
import musicBrainz from "../../util/MusicBrainz";

const TopArtists = ({ topArtists }) => {
    console.log(Object.values(topArtists))
    return (
        <div className="artist-card">
            {Object.values(topArtists)[0].map((val, index) => {
                return <ArtistCard 
                            key={index}
                            name={val.name}
                            image={musicBrainz(val.mbid)}
                            />
            })}
        </div>
    )
}

export default TopArtists;