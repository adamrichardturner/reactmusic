import ArtistCard from "../artistCard/ArtistCard"

const TopArtists = ({ topArtists }) => {
    Object.keys(topArtists).map((artist) => {
        return(
            <div className="artist-cards">
                <ArtistCard 
                    key={artist.name}
                    title={artist.name}
                    image={artist.image}
                />
            </div>
        ) 
    })
}

export default TopArtists;