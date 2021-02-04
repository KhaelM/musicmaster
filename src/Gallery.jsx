import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        console.log('gallery.props', this.props);
        const { tracks } = this.props;
        return (
            <div className="Gallery">
                {tracks.map((track, index) => {
                    return (
                        <div key={index} className="track">
                            <img
                                src={`http://e-cdn-images.deezer.com/images/cover/${track.md5_image}/1400x1400-000000-80-0-0.jpg`}
                                alt="track"
                                className="track-img"
                            />
                            <p className="track-text">{track.title}</p>
                        </div>)
                })}
            </div>
        );
    }
}

export default Gallery;