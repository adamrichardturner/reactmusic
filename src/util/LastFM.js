const apiKey = '5c8b135689d792b62c60afc5de010b26';
const rootURL = 'http://ws.audioscrobbler.com/2.0/';

const LastFM = {
    async getTopArtists() {
        const queryParams = 'method=chart.gettopartists';
        const endpoint = `${rootURL}?${queryParams}&api_key=${apiKey}&format=json`
        try {
            const response = await fetch(endpoint);
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('API request failed!');
        } catch (error) {
            console.log(error);
        }
    },
    async getTopTracks() {
        const queryParams = 'method=chart.gettoptracks'
        const endpoint = `${rootURL}?${queryParams}&api_key=${apiKey}&format=json`
        try {
            const response = await fetch(endpoint);
            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('API request failed!');
        } catch (error) {
            console.log(error);
        }
    }
}

export default LastFM;