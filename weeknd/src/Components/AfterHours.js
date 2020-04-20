import React from 'react';
import albums from '../albums'
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
        spotify.request(albums[0].spotify)
            .then(res => {
                this.setState({ album: res.items }) 
                console.log(this.state.album)})
            .catch(err => console.log(err));
    }

    render () {
        return (
            <div className="parallax-container">
            <div className="row">
                <div className="col s6 m3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content">
                            <span className="card-title activator white-text text-darken-4">View Tracks<i className="material-icons right"></i></span>
                        </div>
                          <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Track Listing<i className="material-icons right">close</i></span>
                            {this.state.album.map(tracks =>
                                <p>{tracks.name} <a href={tracks.external_urls.spotify}>Play on Spotify</a></p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax"><img src={albums[0].cover}></img></div>
            </div>
        )
    };
}

export default AfterHours;