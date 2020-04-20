import React from 'react';
var Spotify = require('node-spotify-api');


class AfterHours extends React.Component {
    state = {
        albums: []
    }

    componentDidMount() {
        var spotify = new Spotify({
            id: 'ac73e18e77e9438f97bc664c8503b3cd',
            secret: '1c84162373774c8cb85187e4c178afc6'
          });
        spotify.request('https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ/albums?limit=22&?market=US&?include_groups=album')
            .then(res => {
                this.setState({ albums: res.items }) 
                console.log(this.state.albums)})
            .catch(err => console.log(err));
    }

    render () {
        return (
            <div className="container">
            {this.state.albums.map(album =>
            <p>={album.name} + {album.href}></p>              
                )}
        </div>
        );
    };

}

export default AfterHours;