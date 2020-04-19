import React from 'react';
var Spotify = require('node-spotify-api');


class AfterHours extends React.Component {
    state = {
        album: []
    }

    componentDidMount() {
        var spotify = new Spotify({
            id: 'ac73e18e77e9438f97bc664c8503b3cd',
            secret: '1c84162373774c8cb85187e4c178afc6'
          });
        spotify.request('https://api.spotify.com/v1/albums/4yP0hdKOZPNshxUOjY0cZj/tracks')
            .then(res => {
                this.setState({ album: res}) 
                console.log(this.state.album)})
            .catch(err => console.log(err));
    }

    render () {
        return (
            <div>
                <p>This works {this.state.album.href}</p>
            </div>
        );
    };

}

export default AfterHours;