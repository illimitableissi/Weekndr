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
                this.setState({ album: res.items }) 
                console.log(this.state.album)})
            .catch(err => console.log(err));
    }

    render () {
        return (
            <div className="container">
            <div className="parallax-container">
                <div className="row">
                {this.state.album.map(tracks => (
                        <div className="col s6 m3">
                        <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                    <p>{tracks.name}</p>
                    <div className="card-action">
                    <a href={tracks.external_urls.spotify}>Play on Spotify</a>
                    </div>
                    </div>
                    </div>
                    </div>
                ))}
                </div>
              <div className="parallax"><img src="images/afterHours.jpg"></img></div>
        </div>
        </div>
        );
    };

}

export default AfterHours;