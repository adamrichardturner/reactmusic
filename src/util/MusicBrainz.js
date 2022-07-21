// For getting artist imagery
const musicBrainz = (mbid) => {
    if(mbid) {
        const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
        fetch(url)
                 .then(res => res.json())
                 .then((out) => {
                     const relations = out.relations;
                     for(let i=0; i < relations.length; i++) {
                         if(relations[i].type === 'image') {
                            let image_url = relations[i].url.resource;
                            if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                    const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                    image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                                }
                                return(image_url)
                         }
                     }
                 })
    }
}

export default musicBrainz;