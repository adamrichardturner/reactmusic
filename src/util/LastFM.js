const apiKey = '5b7f2ede70d986f7cf6f824eb32ef1da';
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