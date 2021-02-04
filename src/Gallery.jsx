import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            audio: null,
            playingUrl: ''
        }
    }

    playAudio(previewUrl) {
        const audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                audio,
                playingUrl: previewUrl
            })
        } else {
            this.state.audio.pause();
            if (this.state.playingUrl === previewUrl) {
                this.setState({
                    playing: false
                })
            } else {
                audio.play();
                this.setState({
                    playing: true,
                    audio,
                    playingUrl: previewUrl
                })
            }
        }
    }

    render() {
        console.log('gallery.props', this.props);
        const { tracks } = this.props;
        let content = tracks !== undefined ?
            <div className="Gallery">
                {tracks.map((track, index) => {
                    return (
                        <div key={index} className="track" onClick={() => this.playAudio(track.preview)}>
                            <img
                                src={`http://e-cdn-images.deezer.com/images/cover/${track.md5_image}/1400x1400-000000-80-0-0.jpg`}
                                alt="track"
                                className="track-img"
                            />
                            <div className="track-play">
                                <div className="track-play-inner">
                                    {this.state.playing && this.state.playingUrl === track.preview ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                                </div>
                            </div>
                            <p className="track-text">{track.title}</p>
                        </div>)
                })}
            </div> :
            <div></div>
        return (
            content
        );
    }
}

export default Gallery;