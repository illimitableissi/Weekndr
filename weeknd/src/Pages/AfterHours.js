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
    
        spotify.search({ type: 'album', query: 'After+Hours'})
        .then(res => this.setState({ albums: res.data }))
        .catch(err => console.log(err));
        console.log(this.state.albums)
    }

    render () {
        return (
            <div>
                <p>This works</p>
            </div>
        );
    };

}

export default AfterHours;