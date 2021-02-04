import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Artist from './Artist';
import Gallery from './Gallery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: []
        }

        this.updateQuery = this.updateQuery.bind(this);
        this.search = this.search.bind(this);
    }

    search() {
        const BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search';
        let FETCH_URL = `${BASE_URL}?q=${this.state.query}`;
        console.log('FETCH_URL', FETCH_URL);

        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "1bfa7f17d6mshcb867b7f1baa4c8p1c051ejsn0c7e7889960a");
        myHeaders.append("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
        myHeaders.append("useQueryString", true);

        fetch(FETCH_URL, {
            method: 'GET',
            headers: myHeaders
        }).then(response => response.json())
            .then(json => {
                let tracks = json.data;
                this.setState({ tracks })
                FETCH_URL = `https://deezerdevs-deezer.p.rapidapi.com/artist/${tracks[0].artist.id}`;
                fetch(FETCH_URL, { method: 'GET', headers: myHeaders }).then(response => response.json()).then(json => {
                    this.setState({
                        artist: json
                    });
                })


                //http://e-cdn-images.deezer.com/images/cover/5b59dc18e109515420f8237719bd2186/1400x1400-000000-80-0-0.jpg
            });
    }

    updateQuery(event) {
        this.setState({
            query: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <div className="app-title">Music Master</div>
                <Form inline>
                    <FormControl onChange={this.updateQuery} className="searchbar" placeholder="search an artist" />
                    <Button onClick={this.search}>Search</Button>
                </Form>
                {this.state.artist !== null ? <Artist artist={this.state.artist} /> : <div></div>}
                <Gallery tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;