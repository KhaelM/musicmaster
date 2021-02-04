import React, { Component } from 'react';

class Artist extends Component {
    render() {
        let artist = {
            name: '',
            picture: '',
            nb_fan: 0,
            nb_album: 0
        }

        if (this.props.artist !== null) {
            artist = this.props.artist;
        }

        console.log(artist);


        return (
            <div className="Artist">
                <div className="artist-image">
                    <img className="artist-image-inner" src={artist.picture_big} alt="Artist" />
                </div>
                <div className="artist-info">
                    <div className="artist-name">{artist.name}</div>
                    <div>Fan counts: {artist.nb_fan}</div>
                    <div>Albums counts: {artist.nb_album}</div>
                </div>
            </div>
        );
    }
}

export default Artist;