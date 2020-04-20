import React from 'react';
import albums from '../albums'
var keys = require("../keys");
var Spotify = require('node-spotify-api');


class KissLand extends React.Component {
    state = {
        album: []
    }

    componentDidMount() {
        var spotify = new Spotify(keys.spotify);
        spotify.request(albums[4].spotify)
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
            <div className="parallax"><img src={albums[4].cover}></img></div>
            </div>
        )
    };
}

export default KissLand;